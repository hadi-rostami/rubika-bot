import Bot from "../..";
import { Markdown } from "../../../utils";
import { FileSource, SendType } from "../../types/methods";
import { InlineKeypad, Keypad } from "../../types/interfaces";
import { ChatKeypadTypeEnum, FileTypeEnum } from "../../types/enums";

async function _sendFile(
  this: Bot,
  chat_id: string,
  file: FileSource,
  text?: string,
  type: FileTypeEnum = FileTypeEnum.File,
  chat_keypad?: Keypad,
  inline_keypad?: InlineKeypad,
  disable_notification = false,
  reply_to_message_id?: string,
  chat_keypad_type?: ChatKeypadTypeEnum,
  auto_delete: number | boolean = false,
) {
  const { upload_url } = await this.requestSendFile(type);
  const {
    data: { file_id },
  } = await this.uploadFile(upload_url, file);

  let data: SendType = {
    chat_id,
    file_id,
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

  const res = await this.builder("sendFile", data);

  if (auto_delete !== false) await this.deleteMessage(chat_id, res.message_id);

  return res;
}

export default _sendFile;
