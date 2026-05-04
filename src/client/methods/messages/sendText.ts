import Client from "../../client";

async function sendText(
  this: Client,
  object_guid: string,
  text: string,
  reply_id?: string,
  aux_data?: { button_id: string },
  auto_delete?: number,
) {
  return await this.sendMessage(
    object_guid,
    text,
    reply_id,
    null,
    aux_data,
    undefined,
    false,
    false,
    false,
    auto_delete,
  );
}

export default sendText;
