import Client from "../../client";

async function sendMessageAPICall(
  this: Client,
  text: string,
  object_guid: string,
  message_id: string,
  aux_data: { button_id: string },
) {
  return await this.builder("sendMessageAPICall", {
    text,
    object_guid,
    message_id,
    aux_data,
  });
}

export default sendMessageAPICall;
