import Client from "../../client";

async function sendGif(
  this: Client,
  object_guid: string,
  gif: string | Buffer<ArrayBufferLike>,
  caption?: string,
  reply_to_message_id?: string,
  auto_delete?: number
) {
  return await this.sendMessage(
    object_guid,
    caption,
    reply_to_message_id,
    gif,
    "Gif",
    undefined,
    true,
    undefined,
    auto_delete
  );
}

export default sendGif;