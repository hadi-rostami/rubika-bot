import Client from "../../client";

async function getBannedChannelMembers(
  this: Client,
  channel_guid: string,
  start_id?: string
) {
  return await this.builder("getBannedChannelMembers", {
    channel_guid,
    start_id,
  });
}

export default getBannedChannelMembers;
