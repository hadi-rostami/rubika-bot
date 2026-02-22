import Client from "../../client";
async function getMessagesInterval(
  this: Client,
  object_guid: string,
  middle_message_id: string
) {
  return await this.builder("getMessagesInterval", {
    object_guid,
    middle_message_id,
  });
}

export default getMessagesInterval;
