import Bot from "../..";

async function forwardMessage(
  this: Bot,
  from_chat_id: string,
  message_id: string,
  to_chat_id: string,
  disable_notification = false
) {
  return await this.builder("forwardMessage", {
    from_chat_id,
    message_id,
    to_chat_id,
    disable_notification,
  });
}

export default forwardMessage;
