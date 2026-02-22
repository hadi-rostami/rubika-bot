import Client from "../../client";

async function leaveChannelVoiceChat(
  this: Client,
  channel_guid: string,
  voice_chat_id: string
) {
  return await this.builder("leaveChannelVoiceChat", {
    channel_guid,
    voice_chat_id,
  });
}

export default leaveChannelVoiceChat;
