import * as fs from "fs";
import Client from "../../client";
import { optionalImport } from "../../utils";
import { thumbnail } from "../utilities";
import { Markdown } from "../../../utils";

const optionalMusicMetadata =
  await optionalImport<typeof import("music-metadata")>("music-metadata");

async function sendMessage(
  this: Client,
  object_guid: string,
  text: string | null = null,
  reply_to_message_id: string | null = null,
  file_inline: Buffer | string | null = null,
  type: string = "File",
  is_spoil: boolean = false,
  thumb: boolean | string = true,
  audio_info: boolean = false,
  auto_delete?: number,
) {
  if (
    ["me", "cloud", "self"].includes(object_guid.toLowerCase()) &&
    this.userGuid
  ) {
    object_guid = this.userGuid;
  }

  let duration: number = 5000;
  let file_uploaded;
  let fileName: string | null = null;
  let audio_data: any;

  let input: Record<string, any> = {
    object_guid,
    rnd: Math.floor(Math.random() * 1e6 + 1),
    reply_to_message_id,
  };

  if (text) input = { ...input, ...Markdown.toMetadata(text) };

  if (file_inline) {
    if (typeof file_inline === "string") {
      fileName = file_inline;

      if (!fs.existsSync(fileName)) {
        return this.logger.error("File not found in the given path", "warn");
      }
      file_inline = await fs.promises.readFile(fileName);
    } else if (!Buffer.isBuffer(file_inline)) {
      throw this.logger.error(
        "File argument must be a file path or bytes",
        "warn",
      );
    }
  }

  if (file_inline && Buffer.isBuffer(file_inline)) {
    if (!fileName) {
      if (["Music", "Voice"].includes(type))
        fileName = `file_${new Date().toDateString()}.mp3`;
      else if (["Video", "Gif", "VideoMessage"].includes(type))
        fileName = `file_${new Date().toDateString()}.mp4`;
      else if (type === "Image")
        fileName = `file_${new Date().toDateString()}.jpg`;
      else fileName = `file_${new Date().toDateString()}.zip`;
    }

    if (["Music", "Voice"].includes(type)) {
      thumb = false;
      if (audio_info) {
        if (!optionalMusicMetadata) {
          throw new Error(
            "music-metadata module is not installed. Some features may be disabled.",
          );
        }

        audio_data = await optionalMusicMetadata.parseBuffer(file_inline);
        duration = audio_data.format.duration || 5000;
      }
    }

    if (thumb) {
      try {
        if (["Video", "Gif", "VideoMessage"].includes(type)) {
          thumb = await thumbnail.fromVideo(fileName);
          duration = (await thumbnail.getTime(fileName)) * 1000 || 5000;
        } else if (type === "Image") {
          thumb = await thumbnail.fromImage(fileName);
        }
      } catch (error) {
        this.logger.error("Thumbnail generation error:" + error, "warn");
        thumb = false;
      }
    }

    file_uploaded = await this.network.uploadFile(fileName);

    if (type === "VideoMessage") file_uploaded["is_round"] = true;
    file_uploaded["type"] = type === "VideoMessage" ? "Video" : type;
    if (is_spoil) file_uploaded["is_spoil"] = is_spoil;

    if (thumb) {
      if (type !== "Image") {
        file_uploaded["time"] = duration;
      }
      file_uploaded["width"] = 320;
      file_uploaded["height"] = 320;
      file_uploaded["thumb_inline"] = thumb;
    }
    if (audio_info) {
      file_uploaded["music_performer"] = audio_data.common.title || "RubJS";
      file_uploaded["time"] = audio_data.format.duration || 5000;
    }
  }

  if (file_inline) {
    input["file_inline"] = file_uploaded;
  }

  const result = await this.builder("sendMessage", input);

  if (auto_delete) {
    const res = setTimeout(async () => {
      await this.deleteMessages(
        result.message_update.object_guid,
        result.message_update.message_id,
      );

      clearTimeout(res);
    }, auto_delete * 1000);
  }

  return result;
}

export default sendMessage;
