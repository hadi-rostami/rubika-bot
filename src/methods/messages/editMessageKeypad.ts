import Bot from "../..";
import { InlineKeypad } from "../../types/interfaces";

async function editMessageKeypad(
  this: Bot,
  chat_id: string,
  message_id: string,
  inline_keypad?: InlineKeypad
) {
  const data = {
    chat_id,
    message_id,
    inline_keypad,
  };

  return await this.builder("editMessageKeypad", data);
}

export default editMessageKeypad;
