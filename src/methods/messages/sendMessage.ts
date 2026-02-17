import Bot from "../..";
import { Markdown } from "../../utils";
import { SendType } from "../../types/methods";
import { ChatKeypadTypeEnum } from "../../types/enums";
import { InlineKeypad, Keypad } from "../../types/interfaces";

async function sendMessage(
  this: Bot,
  chat_id: string,
  text: string,
  chat_keypad?: Keypad,
  inline_keypad?: InlineKeypad,
  disable_notification = false,
  reply_to_message_id?: string,
  chat_keypad_type?: ChatKeypadTypeEnum,
  auto_delete: number | boolean = false,
) {
  let data: SendType = {
    chat_id,
    disable_notification,
  };

  if (text) data = { ...data, ...Markdown.toMetadata(text.trim()) };
  if (chat_keypad) data.chat_keypad = chat_keypad;
  if (inline_keypad) data.inline_keypad = inline_keypad;
  if (chat_keypad_type) data.chat_keypad_type = chat_keypad_type;
  if (reply_to_message_id) data.reply_to_message_id = reply_to_message_id;

  if (chat_keypad && !chat_keypad_type) {
    data.chat_keypad_type = ChatKeypadTypeEnum.New;
  }

  if (inline_keypad && chat_keypad_type) {
    data.chat_keypad_type = ChatKeypadTypeEnum.None;
  }

  const res = await this.builder("sendMessage", data);

  if (auto_delete !== false) await this.deleteMessage(chat_id, res.message_id);

  return res;
}

export default sendMessage;
