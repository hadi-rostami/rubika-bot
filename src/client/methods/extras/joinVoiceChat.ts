import Client from "../../client";

async function joinVoiceChat(
  this: Client,
  chat_guid: string,
  voice_chat_id: string,
  sdp_offer_data: string
) {
  return await this.builder(
    chat_guid.startsWith("g0") ? "joinGroupVoiceChat" : "joinChannelVoiceChat",
    {
      chat_guid,
      voice_chat_id,
      sdp_offer_data,
      self_object_guid: this.userGuid,
    }
  );
}

export default joinVoiceChat;
