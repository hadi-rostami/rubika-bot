import Client from "../../client";

async function joinChannelAction(
  this: Client,
  channel_guid: string,
  action: "Join" | "Remove" | "Archive" = "Join",
) {
  if (!["Join", "Remove", "Archive"].includes(action)) {
    this.logger.error(
      'The `action` argument can only be in `["Join", "Remove", "Archive"]`. Using default "Join".',
      "warn",
    );

    action = "Join";
  }

  return await this.builder("joinChannelAction", { channel_guid, action });
}

export default joinChannelAction;
