import Bot from "../..";

async function sendPoll(
  this: Bot,
  chat_id: string,
  question: string,
  options: string[],
  auto_delete: number | false = false,
) {
  const res = await this.builder("sendPoll", { chat_id, question, options });

  if (auto_delete !== false)
    setTimeout(async () => {
      await this.deleteMessage(chat_id, res.message_id);
    }, auto_delete);
    
  return res;
}

export default sendPoll;
