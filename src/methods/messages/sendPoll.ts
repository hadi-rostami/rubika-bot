import Bot from "../..";

async function sendPoll(
  this: Bot,
  chat_id: string,
  question: string,
  options: string[],
  auto_delete: number | boolean = false,
) {
  const res = await this.builder("sendPoll", { chat_id, question, options });

  if (auto_delete !== false) await this.deleteMessage(chat_id, res.message_id);

  return res;
}

export default sendPoll;
