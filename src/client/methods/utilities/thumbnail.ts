import fs from "fs/promises";
import path from "path";
import os from "os";
import { optionalImport } from "../../utils";
const sharp = await optionalImport<typeof import("sharp")>("sharp");
const ffmpeg = optionalImport<typeof import("fluent-ffmpeg")>("fluent-ffmpeg");

class ThumbnailGenerator {
  static async getTime(videoPath: string): Promise<number> {
    if (!ffmpeg) {
      throw new Error(
        "fluent-ffmpeg module is not installed. Some features may be disabled.",
      );
    }

    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(videoPath, (err: any, metadata: any) => {
        if (err) {
          console.error("Error fetching metadata:", err);
          reject(err);
          return;
        }

        resolve(metadata.format.duration);
      });
    });
  }

  static async fromVideo(videoPath: string): Promise<string> {
    if (!ffmpeg) {
      throw new Error(
        "fluent-ffmpeg module is not installed. Some features may be disabled.",
      );
    }

    const tempImagePath = path.join(os.tmpdir(), `thumbnail_${Date.now()}.png`);

    try {
      await new Promise<void>((resolve, reject) => {
        ffmpeg(videoPath)
          .on("end", () => resolve(undefined))
          .on("error", reject)
          .screenshots({
            count: 1,
            timemarks: ["00:00:00.000"],
            filename: path.basename(tempImagePath),
            folder: path.dirname(tempImagePath),
            size: "400x?",
          });
      });

      const thumbnailBuffer = await fs.readFile(tempImagePath);
      const base64Thumbnail = thumbnailBuffer.toString("base64");

      await fs.unlink(tempImagePath);

      return base64Thumbnail;
    } catch (error) {
      console.error("Error generating video thumbnail:", error);
      throw error;
    }
  }

  static async fromImage(
    imagePath: string,
    width: number = 320,
  ): Promise<string> {
    if (!sharp) {
      throw new Error(
        "sharp module is not installed. Some features may be disabled.",
      );
    }

    try {
      const buffer = await sharp(imagePath).resize(width).toBuffer();
      return buffer.toString("base64");
    } catch (error) {
      console.error("Error generating image thumbnail:", error);
      throw error;
    }
  }
}

export default ThumbnailGenerator;
