import Client from "../../client";

async function discardGroupVoiceChat(this: Client, group_guid: string , voice_chat_id: string) {
  return await this.builder("discardGroupVoiceChat", {
    group_guid,
    voice_chat_id
  });
}

export default discardGroupVoiceChat;
