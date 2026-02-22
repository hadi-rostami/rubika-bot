import Client from "../../client";

interface InputType {
  channel_guid: string;
  voice_chat_id: string;
  updated_parameters: string[];
  title?: string;
}

async function setChannelVoiceChatSetting(
  this: Client,
  channel_guid: string,
  voice_chat_id: string,
  title?: string
) {
  let input: InputType = {
    channel_guid,
    voice_chat_id,
    updated_parameters: [],
  };

  if (title) {
    input.title = title;
    input.updated_parameters.push("title");
  }

  return await this.builder("setChannelVoiceChatSetting", input);
}

export default setChannelVoiceChatSetting;
