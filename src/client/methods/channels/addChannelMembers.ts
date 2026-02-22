import Client from "../../client";

async function addChannelMembers(
  this: Client,
  channel_guid: string,
  member_guids: string[] | string
) {
  if (typeof member_guids === "string") member_guids = [member_guids];

  return await this.builder("addChannelMembers", {
    channel_guid,
    member_guids,
  });
}

export default addChannelMembers;
