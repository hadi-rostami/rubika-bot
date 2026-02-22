import Client from "../../client";

async function getGroupVoiceChatUpdates(
  this: Client,
  group_guid: string,
  voice_chat_id: string,
  state: number = Math.round(Date.now() / 1000) - 150
) {
  return await this.builder("getGroupVoiceChatUpdates", {
    group_guid,
    voice_chat_id,
    state,
  });
}

export default getGroupVoiceChatUpdates;
