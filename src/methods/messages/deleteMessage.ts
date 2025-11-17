import Bot from '../..';

async function deleteMessage(
	this: Bot,
	chat_id: string,
	message_id: string,
) {
	return await this.builder('deleteMessage', {
		chat_id,
		message_id,
	});
}

export default deleteMessage;
