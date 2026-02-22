import Client from "../../client";

async function getChannelAdminAccessList(
  this: Client,
  channel_guid: string,
  member_guid: string
) {
  return await this.builder("getChannelAdminAccessList", {
    channel_guid,
    member_guid,
  });
}

export default getChannelAdminAccessList;
