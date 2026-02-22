import Client from "../../client";

async function getChannelAllMembers(
  this: Client,
  channel_guid: string,
  search_text?: string,
  start_id?: string
) {
  return await this.builder("getChannelAllMembers", {
    channel_guid,
    search_text,
    start_id,
  });
}

export default getChannelAllMembers;
