import Client from "../../client";

async function getGroupAdminAccessList(
  this: Client,
  group_guid: string,
  member_guid: string
) {
  return await this.builder("getGroupAdminAccessList", {
    group_guid,
    member_guid,
  });
}

export default getGroupAdminAccessList;
