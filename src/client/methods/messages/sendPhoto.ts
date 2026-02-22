import Client from "../../client";

async function sendPhoto(
  this: Client,
  object_guid: string,
  photo: Buffer<ArrayBufferLike> | string,
  text?: string,
  reply_id?: string,
  is_spoil?: boolean,
  auto_delete?: number
) {
  return this.sendMessage(
    object_guid,
    text,
    reply_id,
    photo,
    "Image",
    is_spoil,
    true,
    false,
    auto_delete
  );
}

export default sendPhoto;
