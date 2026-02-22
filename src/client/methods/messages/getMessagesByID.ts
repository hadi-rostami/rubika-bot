import Client from "../../client";

async function getMessagesByID(
  this: Client,
  object_guid: string,
  message_ids: string | string[]
) {
  if (typeof message_ids === "string") message_ids = [message_ids];

  return await this.builder("getMessagesByID", {
    object_guid,
    message_ids,
  });
}
export default getMessagesByID;
