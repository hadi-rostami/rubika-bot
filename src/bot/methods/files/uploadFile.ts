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

  if (typeof source === "string") {
    if (source.startsWith("http://") || source.startsWith("https://")) {
      // download file
      console.log(`[ uploadFile ] Downloading from URL: ${source}`);
      const res = await fetch(source);
      if (!res.ok) {
        throw this.logger.error(
          `Failed to download file: ${res.status} ${res.statusText}`,
          "error",
        );
      }

      fileData = await res.arrayBuffer();
      detectedFilename =
        filename || getFilenameFromUrl(source) || "downloaded_file";
    } else {
      // file path
      if (!Bun.file(source).size) {
        throw this.logger.error(`File not found: ${source}`, "warn");
      }
      fileData = await Bun.file(source).arrayBuffer();
      detectedFilename = filename || basename(source);
    }
  } else {
    // binery data
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
    } else {
      fileData = source;
    }
    detectedFilename = filename || "binary_file";
  }

  // FormData
  const formData = new FormData();
  formData.append("file", new Blob([fileData]), detectedFilename);

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text();
    throw this.logger.error(`HTTP ${res.status}: ${text}`, "warn");
  }

  const response = await res.json();

  if (response.status !== "OK") {
    throw this.logger.error(
      `Upload failed: ${JSON.stringify(response)}`,
      "warn",
    );
  }

  return response;
}

function getFilenameFromUrl(url: string): string | null {
  try {
    const path = new URL(url).pathname;
    const filename = basename(path);
    return filename !== "." ? filename : null;
  } catch {
    return null;
  }
}

export default uploadFile;
