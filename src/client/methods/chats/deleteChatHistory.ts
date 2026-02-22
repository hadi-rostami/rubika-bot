import Client from "../../client";

async function deleteChatHistory(
  this: Client,
  object_guid: string,
  last_message_id: string
) {
  return await this.builder("deleteChatHistory", {
    object_guid,
    last_message_id,
  });
}

export default deleteChatHistory;
