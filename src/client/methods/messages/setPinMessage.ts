import Client from "../../client";

async function setPinMessage(
  this: Client,
  object_guid: string,
  message_id: string,
  action: "Pin" | "Unpin" = "Pin",
) {
  if (!["Pin", "Unpin"].includes(action)) {
    this.logger.error(
      `The ${action} argument can only be in ("Pin", "Unpin"). Using default "Pin".`,
      "warn",
    );
    action = "Pin";
  }

  return await this.builder("setPinMessage", {
    object_guid,
    message_id,
    action,
  });
}

export default setPinMessage;
