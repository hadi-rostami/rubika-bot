import Client from "../../client";

async function setActionChat(
  this: Client,
  object_guid: string,
  action: "Mute" | "Unmute",
) {
  if (!["Mute", "Unmute"].includes(action)) {
    this.logger.error(
      '`action` argument can only be in `["Mute", "Unmute"]` Using default "Mute".',
      "warn",
    );
    action = "Mute";
  }

  return await this.builder("setActionChat", { object_guid, action });
}

export default setActionChat;
