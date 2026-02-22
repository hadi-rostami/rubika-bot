import Client from "../../client";

async function getGroupAllMembers(
  this: Client,
  group_guid: string,
  search_text?: string,
  start_id?: string
) {
  return await this.builder("getGroupAllMembers", {
    group_guid,
    search_text,
    start_id,
  });
}

export default getGroupAllMembers;
