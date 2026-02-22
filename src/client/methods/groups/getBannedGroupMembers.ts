import Client from "../../client";

async function getBannedGroupMembers(
  this: Client,
  group_guid: string,
  start_id?: string
){
  return await this.builder("getBannedGroupMembers", { group_guid, start_id });
}

export default getBannedGroupMembers;
