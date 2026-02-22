import Bot from '../..';

async function banChatMember(this: Bot, chat_id: string , user_id: string) {
	return await this.builder('banChatMember', { chat_id , user_id});
}

export default banChatMember;
