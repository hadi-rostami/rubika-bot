import Client from "../../client";

async function transcribeVoice(
  this: Client,
  object_guid: string,
  message_id: string
) {
  return await this.builder("transcribeVoice", { object_guid, message_id });
}

export default transcribeVoice;
