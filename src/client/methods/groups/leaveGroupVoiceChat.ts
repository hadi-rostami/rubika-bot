import Client from "../../client";

async function leaveGroupVoiceChat(
  this: Client,
  group_guid: string,
  voice_chat_id: string
) {
  return await this.builder("leaveGroupVoiceChat", {
    group_guid,
    voice_chat_id,
  });
}

export default leaveGroupVoiceChat;
