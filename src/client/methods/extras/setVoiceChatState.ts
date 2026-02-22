import Client from "../../client";

async function setVoiceChatState(
  this: Client,
  chat_guid: string,
  voice_chat_id: string,
  participant_object_guid?: string,
  action: "Mute" | "Unmute" = "Unmute"
) {
  const method = chat_guid.startsWith("g0")
    ? "setGroupVoiceChatState"
    : "setChannelVoiceChatState";
  return await this.builder(method, {
    chat_guid,
    voice_chat_id,
    participant_object_guid,
    action,
  });
}

export default setVoiceChatState;
