import Bot from '../..';

async function unbanChatMember(this: Bot, chat_id: string , user_id: string) {
	return await this.builder('unbanChatMember', { chat_id , user_id});
}

export default unbanChatMember;
