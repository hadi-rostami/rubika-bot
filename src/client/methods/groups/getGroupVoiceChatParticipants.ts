import Client from "../../client";

async function  getGroupVoiceChatParticipants ( this: Client , chat_guid: string , voice_chat_id: string ) {
    return await this.builder('getGroupVoiceChatParticipants' , {chat_guid ,voice_chat_id});
};

export default getGroupVoiceChatParticipants;