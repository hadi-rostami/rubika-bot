import Client from "../../client";

async function sendVoiceChatActivity(
  this: Client,
  chat_guid: string,
  voice_chat_id: string,
  participant_object_guid: string,
  activity: "Speaking" = "Speaking"
) {
  return await this.builder(
    chat_guid.startsWith("g0")
      ? "sendGroupVoiceChatActivity"
      : "sendChannelVoiceChatActivity",
    {
      chat_guid,
      voice_chat_id,
      activity,
      participant_object_guid: participant_object_guid || this.userGuid,
    }
  );
}

export default sendVoiceChatActivity;
