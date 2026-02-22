import Client from "../../client";

type ChatHistory = "Hidden" | "Visible";

interface InputType {
  title?: string;
  channel_guid: string;
  updated_parameters: string[];
  description?: string;
  channel_type?: string;
  sign_messages?: boolean;
  is_restricted_content?: boolean;
  chat_reaction_setting?: {};
  chat_history_for_new_members?: ChatHistory;
}

async function editChannelInfo(
  this: Client,
  channel_guid: string,
  title?: string,
  description?: string,
  channel_type?: string,
  sign_messages?: boolean,
  is_restricted_content?: boolean,
  chat_reaction_setting?: {},
  chat_history_for_new_members?: ChatHistory,
) {
  let input: InputType = { channel_guid, updated_parameters: [] };

  if (title) {
    input.title = title;
    input.updated_parameters.push("title");
  }
  if (description !== undefined) {
    input.description = description;
    input.updated_parameters.push("description");
  }
  if (channel_type !== undefined) {
    input.channel_type = channel_type;
    input.updated_parameters.push("channel_type");
  }
  if (sign_messages !== undefined) {
    input.sign_messages = sign_messages;
    input.updated_parameters.push("sign_messages");
  }
  if (chat_reaction_setting !== undefined) {
    input.chat_reaction_setting = chat_reaction_setting;
    input.updated_parameters.push("chat_reaction_setting");
  }

  if (is_restricted_content !== undefined) {
    input.is_restricted_content = is_restricted_content;
    input.updated_parameters.push("is_restricted_content");
  }

  if (chat_history_for_new_members) {
    if (!["Hidden", "Visible"].includes(chat_history_for_new_members)) {
      this.logger.error(
        '`chat_history_for_new_members` should be in `["Hidden", "Visible"]`. Using default "Hidden".',
        "warn",
      );

      chat_history_for_new_members = "Hidden";
    }

    input.chat_history_for_new_members = chat_history_for_new_members;
    input.updated_parameters.push("chat_history_for_new_members");
  }

  return await this.builder("editChannelInfo", input);
}

export default editChannelInfo;
