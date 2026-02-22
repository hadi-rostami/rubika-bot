import Client from "../../client";

async function sendChatActivity(
  this: Client,
  object_guid: string,
  activity: "Typing" | "Uploading" | "Recording",
) {
  if (!["Typing", "Uploading", "Recording"].includes(activity)) {
    this.logger.error(
      '`activity` argument can only be in `["Typing", "Uploading", "Recording"]` Using default "Typing".',
      "warn",
    );
    activity = "Typing";
  }

  return await this.builder("sendChatActivity", { object_guid, activity });
}

export default sendChatActivity;
