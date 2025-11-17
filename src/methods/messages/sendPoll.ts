import Bot from "../..";

async function sendPoll(
  this: Bot,
  chat_id: string,
  question: string,
  options: string[]
) {
  return await this.builder("sendPoll", { chat_id, question, options });
}

export default sendPoll;
