import Client from "../../client";

type ChatHistoryOption = "Hidden" | "Visible";

async function editGroupInfo(
  this: Client,
  group_guid: string,
  title?: string,
  description?: string,
  slow_mode?: string,
  event_messages?: boolean,
  is_restricted_content?: boolean,
  chat_reaction_setting?: { [key: string]: string | number } | null | undefined,
  chat_history_for_new_members?: ChatHistoryOption,
) {
  const updated_parameters: string[] = [];
  const input_data: Record<string, any> = { group_guid };

  if (title !== undefined) {
    input_data.title = title;
    updated_parameters.push("title");
  }

  if (description !== undefined) {
    input_data.description = description;
    updated_parameters.push("description");
  }

  if (slow_mode !== undefined) {
    input_data.slow_mode = slow_mode;
    updated_parameters.push("slow_mode");
  }

  if (event_messages !== undefined) {
    input_data.event_messages = event_messages;
    updated_parameters.push("event_messages");
  }

  if (is_restricted_content !== undefined) {
    input_data.is_restricted_content = is_restricted_content;
    updated_parameters.push("is_restricted_content");
  }

  if (chat_reaction_setting !== undefined) {
    input_data.chat_reaction_setting = chat_reaction_setting;
    updated_parameters.push("chat_reaction_setting");
  }

  if (chat_history_for_new_members !== undefined) {
    if (!["Hidden", "Visible"].includes(chat_history_for_new_members)) {
      this.logger.error(
        '`chat_history_for_new_members` argument can only be "Hidden" or "Visible". Using default "Hidden".',
        "warn",
      );

      chat_history_for_new_members = "Hidden";
    }
    input_data.chat_history_for_new_members = chat_history_for_new_members;
    updated_parameters.push("chat_history_for_new_members");
  }

  input_data.updated_parameters = updated_parameters;

  return await this.builder("editGroupInfo", { ...input_data });
}

export default editGroupInfo;
