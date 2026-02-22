import Bot from "../..";

async function pinChatMessage(
  this: Bot,
  chat_id: string,
  message_id: string,
  disable_notification = false,
) {
  return await this.builder("pinChatMessage", {
    chat_id,
    message_id,
    disable_notification,
  });
}

export default pinChatMessage;
