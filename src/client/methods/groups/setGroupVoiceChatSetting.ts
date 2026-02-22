import Client from "../../client";

interface InputType {
  group_guid: string;
  voice_chat_id: string;
  updated_parameters: string[];
  title?: string;
}

async function setGroupVoiceChatSetting(
  this: Client,
  group_guid: string,
  voice_chat_id: string,
  title?: string
) {
  let input: InputType = {
    group_guid,
    voice_chat_id,
    updated_parameters: [],
  };

  if (typeof title === "string") {
    input.updated_parameters.push("title");
    input.title = title;
  }

  return await this.builder("setGroupVoiceChatSetting", input);
}

export default setGroupVoiceChatSetting;
