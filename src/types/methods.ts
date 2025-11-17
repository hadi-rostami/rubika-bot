import { ChatKeypadTypeEnum } from "./enums";
import { InlineKeypad, Keypad } from "./interfaces";

export type FileSource = string | ArrayBuffer | Uint8Array | Buffer;

export interface SendType {
  chat_id: string;
  file_id?: string;
  sticker_id?: string;
  disable_notification: boolean;
  chat_keypad_type?: ChatKeypadTypeEnum;
  text?: string;
  chat_keypad?: Keypad;
  inline_keypad?: InlineKeypad;
  reply_to_message_id?: string;
}

export interface Commend {
	command: string;
	description: string;
}