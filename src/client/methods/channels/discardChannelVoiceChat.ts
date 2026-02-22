import Client from "../../client";

async function discardChannelVoiceChat(
  this: Client,
  channel_guid: string,
  voice_chat_id: string
) {
  return await this.builder("discardChannelVoiceChat", {
    channel_guid,
    voice_chat_id,
  });
}

export default discardChannelVoiceChat;
