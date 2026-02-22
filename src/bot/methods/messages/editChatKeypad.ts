import Bot from "../..";
import { Keypad } from "../../types/interfaces";
import { ChatKeypadTypeEnum } from "../../types/enums";

async function editChatKeypad(
  this: Bot,
  chat_id: string,
  chat_keypad: Keypad,
  chat_keypad_type: ChatKeypadTypeEnum = ChatKeypadTypeEnum.New
) {
  const data = {
    chat_id,
    chat_keypad,
    chat_keypad_type,
  };

  return await this.builder("editChatKeypad", data);
}

export default editChatKeypad;
