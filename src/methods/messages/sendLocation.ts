import Bot from "../..";
import { Keypad } from "../../types/interfaces";
import { ChatKeypadTypeEnum } from "../../types/enums";

async function sendLocation(
  this: Bot,
  chat_id: string,
  latitude: string,
  longitude: string,
  chat_keypad?: Keypad,
  inline_keypad?: Keypad,
  disable_notification = false,
  reply_to_message_id?: string,
  chat_keypad_type?: ChatKeypadTypeEnum
) {
  const data = {
    chat_id,
    latitude,
    longitude,
    chat_keypad,
    inline_keypad,
    disable_notification,
    reply_to_message_id,
    chat_keypad_type,
  };

  if (chat_keypad && !chat_keypad_type) {
    data.chat_keypad_type = ChatKeypadTypeEnum.New;
  }

  if (inline_keypad && chat_keypad_type) {
    data.chat_keypad_type = ChatKeypadTypeEnum.None;
  }

  return await this.builder("sendLocation", data);
}

export default sendLocation;
