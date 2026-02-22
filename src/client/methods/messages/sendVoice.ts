import Client from "../../client";

async function sendVoice(
  this: Client,
  object_guid: string,
  voice: string | Buffer<ArrayBufferLike>,
  caption?: string,
  reply_to_message_id?: string,
  auto_delete?: number
) {
  return await this.sendMessage(
    object_guid,
    caption,
    reply_to_message_id,
    voice,
    "Voice",
    undefined,
    undefined,
    undefined,
    auto_delete
  );
}

export default sendVoice;
