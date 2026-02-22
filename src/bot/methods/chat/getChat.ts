import Bot from '../..';

async function getChat(this: Bot, chat_id: string) {
	return await this.builder('getChat', { chat_id });
}

export default getChat;
