import Bot from '../..';
import { InlineKeypad, Keypad } from "../../types/interfaces";
import { ChatKeypadTypeEnum, FileTypeEnum } from "../../types/enums";
import { FileSource } from "../../types/methods";

async function sendVideo(
	this: Bot,
	chat_id: string,
	file: FileSource,
	text?: string,
	chat_keypad?: Keypad,
	inline_keypad?: InlineKeypad,
	disable_notification = false,
	reply_to_message_id?: string,
	chat_keypad_type?: ChatKeypadTypeEnum,
) {
	return await this._sendFile(
		chat_id,
		file,
		text,
		FileTypeEnum.Video,
		chat_keypad,
		inline_keypad,
		disable_notification,
		reply_to_message_id,
		chat_keypad_type,
	);
}

export default sendVideo;
