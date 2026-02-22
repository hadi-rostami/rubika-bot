import Client from "../../client";

async function banChannelMember(
  this: Client,
  channel_guid: string,
  member_guid: string,
  action: "Set" | "Unset" = "Set"
) {
  if (!["Set", "Unset"].includes(action)) {

    this.logger.error(
      `${action} argument can only be in ["Set", "Unset"]. Using default "Set".`,
      "warn",
    );
    action = "Set";
  }

  return await this.builder("banChannelMember", {
    channel_guid,
    member_guid,
    action,
  });
}

export default banChannelMember;
