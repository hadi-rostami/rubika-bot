import Bot from "../..";

async function getChatMemberCount(this: Bot, chat_id: string) {
  return await this.builder("getChatMemberCount", {
    chat_id,
  });
}

export default getChatMemberCount;
