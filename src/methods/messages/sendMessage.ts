import Bot from "../..";
import { InlineKeypad, Keypad } from "../../types/interfaces";
import { ChatKeypadTypeEnum } from "../../types/enums";
import { SendType } from "../../types/methods";
import Markdown from "../../utils/parser";


async function sendMessage(
  this: Bot,
  chat_id: string,
  text: string,
  chat_keypad?: Keypad,
  inline_keypad?: InlineKeypad,
  disable_notification = false,
  reply_to_message_id?: string,
  chat_keypad_type?: ChatKeypadTypeEnum
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

  return await this.builder("sendMessage", data);
}

export default sendMessage;
