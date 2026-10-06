import Bot from "../..";

async function getChatMember(this: Bot, chat_id: string, user_id: string) {
  return await this.builder("getChatMember", {
    chat_id,
    user_id,
  });
}

export default getChatMember;
