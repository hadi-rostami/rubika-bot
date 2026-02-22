import Client from "../../client";

async function sendDocument(
  this: Client,
  object_guid: string,
  document: string | Buffer<ArrayBufferLike>,
  caption?: string,
  reply_to_message_id?: string,
  auto_delete?: number
) {
  return await this.sendMessage(
    object_guid,
    caption,
    reply_to_message_id,
    document,
    "File",
    undefined,
    undefined,
    undefined,
    auto_delete
  );
}

export default sendDocument;
