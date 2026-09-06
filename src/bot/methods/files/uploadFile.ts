import { fetch } from "bun";
import { basename } from "path";
import Bot from "../..";
import { FileSource } from "../../types/methods";

async function uploadFile(
  this: Bot,
  url: string,
  source: FileSource,
  filename?: string,
) {
  let fileData: ArrayBuffer;
  let detectedFilename: string;
  let fileSize = 0;

  try {
    this.logger.info(`[uploadFile] Starting upload process to ${url}`);

    if (typeof source === "string") {
      if (source.startsWith("http://") || source.startsWith("https://")) {
        this.logger.debug(`[uploadFile] Downloading file from URL: ${source}`);
        const res = await fetch(source);

        if (!res.ok) {
          const msg = `Failed to download file: ${res.status} ${res.statusText}`;
          this.logger.error(msg);
          throw new Error(msg);
        }

        fileData = await res.arrayBuffer();
        fileSize = fileData.byteLength;
        detectedFilename =
          filename || getFilenameFromUrl(source) || "downloaded_file";
        this.logger.info(
          `[uploadFile] Downloaded successfully: ${detectedFilename} (${formatBytes(fileSize)})`,
        );
      } else {
        const file = Bun.file(source);
        const exists = await file.exists();

        if (!exists) {
          const msg = `File not found at path: ${source}`;
          this.logger.error(msg);
          throw new Error(msg);
        }

        fileSize = file.size;
        if (fileSize === 0) {
          const msg = `File is empty: ${source}`;
          this.logger.warn(msg);
        }

        fileData = await file.arrayBuffer();
        detectedFilename = filename || basename(source);
        this.logger.debug(
          `[uploadFile] Read local file: ${detectedFilename} (${formatBytes(fileSize)})`,
        );
      }
    } else {
      if (source instanceof Buffer) {
        fileData = source.buffer.slice(
          source.byteOffset,
          source.byteOffset + source.byteLength,
        ) as ArrayBuffer;
      } else if (source instanceof Uint8Array) {
        fileData = source.buffer.slice(
          source.byteOffset,
          source.byteOffset + source.byteLength,
        ) as ArrayBuffer;
      } else if (source instanceof ArrayBuffer) {
        fileData = source;
      } else {
        const msg = `Invalid binary data type provided: ${typeof source}`;
        this.logger.error(msg);
        throw new TypeError(msg);
      }

      fileSize = fileData.byteLength;
      detectedFilename = filename || `binary_file_${Date.now()}`;
      this.logger.debug(
        `[uploadFile] Processing binary data: ${detectedFilename} (${formatBytes(fileSize)})`,
      );
    }

    this.logger.info(`[uploadFile] Uploading ${detectedFilename}...`);

    const formData = new FormData();
    formData.append("file", new Blob([fileData]), detectedFilename);

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "No response body");
      const msg = `HTTP Error ${res.status}: ${text}`;
      this.logger.error(
        `[uploadFile] Upload failed with HTTP status ${res.status}`,
      );
      throw new Error(msg);
    }

    const response: any = await res.json().catch((e) => {
      this.logger.error("[uploadFile] Failed to parse JSON response", e);
      return null;
    });

    if (!response || response.status !== "OK") {
      const msg = `Upload API Error: ${JSON.stringify(response)}`;
      this.logger.error(`[uploadFile] ${msg}`);
      throw new Error(msg);
    }

    this.logger.info(
      `[uploadFile] Upload completed successfully: ${detectedFilename}`,
    );
    return { ...response, status_message: "OK" };
  } catch (error: unknown) {
    if (error!.message) {
    } else {
      this.logger.error(`[uploadFile] Unexpected error occurred: `+ error);
    }
    throw error;
  }
}

function getFilenameFromUrl(url: string): string | null {
  try {
    const path = new URL(url).pathname;
    const filename = basename(path);
    return filename && filename !== "." ? filename : null;
  } catch {
    return null;
  }
}

function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export default uploadFile;
