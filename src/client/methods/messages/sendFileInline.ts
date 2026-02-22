import Client from "../../client";
import { Markdown } from "../../../utils";

interface FileInline {
  file_id: number;
  mime: string;
  dc_id: number;
  access_hash_rec: string;
  file_name: string;
  width?: number;
  height?: number;
  size: number;
  type: string;
  time?: number;
  music_performer?: string;
  is_round?: boolean;
  is_spoil?: boolean;
}

async function sendFileInline(
  this: Client,
  object_guid: string,
  file_inline: FileInline,
  caption?: string,
  reply_to_message_id?: string,
  auto_delete?: number,
) {
  let input: Record<string, any> = {
    object_guid,
    rnd: Math.floor(Math.random() * 1e6 + 1),
    reply_to_message_id,
    file_inline,
  };

  if (caption) input = { ...input, ...Markdown.toMetadata(caption) };

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
}

export default sendFileInline;
