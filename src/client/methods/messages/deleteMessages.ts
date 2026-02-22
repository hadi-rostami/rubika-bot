import Client from "../../client";

async function deleteMessages(
  this: Client,
  object_guid: string,
  message_ids: string | string[],
  type: "Global" | "Local" = "Global",
) {
  if (!["Global", "Local"].includes(type)) {
    this.logger.error(
      '`type` argument can only be in ("Global", "Local"). Using default "Global".',
      "warn",
    );

    type = "Global";
  }

  if (typeof message_ids === "string") {
    message_ids = [message_ids];
  }

  return await this.builder("deleteMessages", {
    object_guid,
    message_ids,
    type,
  });
}

export default deleteMessages;
