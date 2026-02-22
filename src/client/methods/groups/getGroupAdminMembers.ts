import Client from "../../client";

async function getGroupAdminMembers(
  this: Client,
  group_guid: string,
  start_id?: string
) {
  return await this.builder("getGroupAdminMembers", { group_guid, start_id });
}

export default getGroupAdminMembers;
