import fs from "fs";
import path from "path";
import Network from ".";

const MAX_RETRIES = 5;

export async function uploadFile(
  network: Network,
  filePath: string,
  chunkSize: number = 1048576,
  retryCount: number = 0,
): Promise<any> {
  if (!fs.existsSync(filePath)) {
    const errorMsg = `File not found: ${filePath}`;
    network.client.logger.error(errorMsg, "error");
    throw new Error(errorMsg);
  }

  try {
    const stat = await fs.promises.stat(filePath);
    const fileSize = stat.size;
    const fileName = path.basename(filePath);
    const mime = filePath.split(".").pop() || "application/octet-stream";

    let result = await network.client.requestSendFile(fileName, fileSize, mime);

    let id: string = result.id;
    let upload_url: string = result.upload_url;
    let access_hash_send: string = result.access_hash_send;
    const totalParts: number = Math.ceil(fileSize / chunkSize);

    const stream = fs.createReadStream(filePath, { highWaterMark: chunkSize });
    let index = 0;
    let partFailures = 0;

    network.client.logger.info(
      `Starting upload: ${fileName} (${fileSize} bytes)`,
    );

    for await (const chunk of stream) {
      const currentPart = index + 1;

      try {
        const headers: Record<string, string> = {
          auth: network.client.auth ?? "",
          "file-id": id,
          "total-part": totalParts.toString(),
          "part-number": currentPart.toString(),
          "chunk-size": chunk.length.toString(),
          "access-hash-send": access_hash_send,
        };

        const res = await fetch(upload_url, {
          method: "POST",
          headers,
          body: chunk,
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const response: any = await res.json();

        if (
          response.status === "ERROR_TRY_AGAIN" ||
          response.status === "ERROR"
        ) {
          network.client.logger.warn(
            `Upload failed for part ${currentPart}. Retrying...`,
          );

          if (++partFailures > 3) {
            network.client.logger.warn(
              "Too many failures on parts. Re-initializing upload session.",
            );
            stream.destroy();
            result = await network.client.requestSendFile(
              fileName,
              fileSize,
              mime,
            );
            id = result.id;
            upload_url = result.upload_url;
            access_hash_send = result.access_hash_send;

            if (retryCount >= MAX_RETRIES) {
              throw new Error("Max retries reached for upload initialization.");
            }
            return uploadFile(network, filePath, chunkSize, retryCount + 1);
          }

          await new Promise((r) => setTimeout(r, 2000));
          index--;
          continue;
        }

        partFailures = 0;
        index++;

        if (
          response.status === "OK" &&
          (response.status_det === "OK" || response.data?.access_hash_rec)
        ) {
          network.client.logger.info(
            `Upload completed successfully: ${fileName}`,
          );
          return {
            mime,
            size: fileSize,
            dc_id: result.dc_id,
            file_id: id,
            file_name: fileName,
            access_hash_rec: response.data.access_hash_rec,
          };
        }
      } catch (error: any) {
        network.client.logger.error(
          `Error uploading part ${currentPart}: ${error.message}`,
        );
        await new Promise((resolve) => setTimeout(resolve, 5000));
        index--;
      }
    }

    if (index < totalParts) {
      throw new Error("Upload stream ended prematurely.");
    }
  } catch (error: any) {
    network.client.logger.error(`Fatal upload error: ${error.message}`);
    throw error;
  }

  throw new Error("Upload failed completely after all retries.");
}

export async function download(
  network: Network,
  dc_id: number,
  file_id: number,
  access_hash: string,
  size: number,
  chunkSize: number = 131072,
): Promise<Buffer> {
  const baseDomain =
    network.client.config.application === "Rubika"
      ? "messenger"
      : `shstorage${dc_id}`;
  const base_url = `https://${baseDomain}.iranlms.ir`;

  const headersBase = {
    auth: network.client.auth || "",
    "access-hash-rec": access_hash,
    "file-id": String(file_id),
    "user-agent": network.userAgent,
  };

  const fetchChunk = async (
    start_index: number,
    last_index: number,
    retries: number = 0,
  ): Promise<Buffer> => {
    const headers = {
      ...headersBase,
      "start-index": String(start_index),
      "last-index": String(last_index),
    };

    try {
      const res = await fetch(`${base_url}/GetFile.ashx`, {
        method: "POST",
        headers,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const arrayBuffer = await res.arrayBuffer();

      if (arrayBuffer.byteLength === 0 && last_index - start_index + 1 > 0) {
        throw new Error("Received empty chunk");
      }

      return Buffer.from(arrayBuffer);
    } catch (err: any) {
      network.client.logger.warn(
        `[fetchChunk] Failed at ${start_index}-${last_index}: ${err.message}. Retry ${retries}/${MAX_RETRIES}`,
      );

      if (retries >= MAX_RETRIES) {
        network.client.logger.error(
          `[fetchChunk] Max retries reached for chunk ${start_index}`,
        );
        throw err;
      }

      await new Promise((r) => setTimeout(r, 1000 * (retries + 1)));
      return fetchChunk(start_index, last_index, retries + 1);
    }
  };

  let result = Buffer.alloc(0);
  let start_index = 0;

  network.client.logger.info(
    `Starting download: FileID ${file_id}, Size ${size}`,
  );

  try {
    while (start_index < size) {
      const last_index = Math.min(start_index + chunkSize, size) - 1;

      try {
        const chunkData = await fetchChunk(start_index, last_index);

        if (chunkData.length === 0) {
          network.client.logger.warn("Received empty chunk, breaking loop.");
          break;
        }

        result = Buffer.concat([result, chunkData]);
        start_index = last_index + 1;

        if (size > 1048576 && start_index % Math.floor(size / 10) === 0) {
          const percent = Math.floor((start_index / size) * 100);
          network.client.logger.debug(`Download progress: ${percent}%`);
        }
      } catch (err) {
        network.client.logger.error(
          "Download aborted due to unrecoverable chunk error.",
        );
        throw err;
      }
    }

    network.client.logger.info(
      `Download completed: ${result.length} bytes received.`,
    );
    return result;
  } catch (error) {
    network.client.logger.error("Download process failed.", "error");
    throw error;
  }
}
