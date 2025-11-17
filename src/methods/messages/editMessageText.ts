import Bot from "../..";

async function editMessageText(
  this: Bot,
  chat_id: string,
  text: string,
  message_id: string
) {
  return await this.builder("editMessageText", {
    chat_id,
    message_id,
    text,
  });
}

export default editMessageText;
