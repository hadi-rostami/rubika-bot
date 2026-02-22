import Client from "../../client";

async function getMessageShareUrl(
  this: Client,
  object_guid: string,
  message_id: string
){
  return await this.builder("getMessageShareUrl", { object_guid, message_id });
}

export default getMessageShareUrl;