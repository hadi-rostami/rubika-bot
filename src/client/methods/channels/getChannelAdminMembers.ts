import Client from "../../client";

async function getChannelAdminMembers(
  this: Client,
  channel_guid: string,
  start_id?: string
) {
  return await this.builder("getChannelAdminMembers", {
    channel_guid,
    start_id,
  });
}

export default getChannelAdminMembers;
