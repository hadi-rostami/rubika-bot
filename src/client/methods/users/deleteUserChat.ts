import Client from "../../client";

async function deleteUserChat(
  this: Client,
  user_guid: string,
  last_deleted_message_id: string
) {
  return await this.builder("deleteUserChat", {
    user_guid,
    last_deleted_message_id,
  });
}

export default deleteUserChat;
