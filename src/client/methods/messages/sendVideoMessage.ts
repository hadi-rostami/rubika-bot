import Client from "../../client";

async function sendVideoMessage(
  this: Client,
  object_guid: string,
  video: string | Buffer<ArrayBufferLike>,
  reply_to_message_id?: string,
  is_spoil?: boolean,
  thumb?: string | boolean,
  auto_delete?: number
) {
  return await this.sendMessage(
    object_guid,
    null,
    reply_to_message_id,
    video,
    "VideoMessage",
    is_spoil,
    thumb,
    undefined,
    auto_delete
  );
}

export default sendVideoMessage;
