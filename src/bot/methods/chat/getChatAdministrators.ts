import Bot from "../..";

async function getChatAdministrators(this: Bot, chat_id: string) {
  return await this.builder("getChatAdministrators", {
    chat_id,
  });
}

export default getChatAdministrators;
