import Client from "../../client";

async function joinGroupVoiceChat(
  this: Client,
  chat_guid: string,
  voice_chat_id: string,
  sdp_offer_data: string,
  self_object_guid: string
) {
  return await this.builder("joinGroupVoiceChat", {
    chat_guid,
    voice_chat_id,
    sdp_offer_data,
    self_object_guid,
  });
}

export default joinGroupVoiceChat;
