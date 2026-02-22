import Client from "../../client";

async function addGroupMembers(
  this: Client,
  group_guid: string,
  member_guids: string | string[]
) {
  if (typeof member_guids === "string") member_guids = [member_guids];

  return await this.builder("addGroupMembers", { group_guid, member_guids });
}

export default addGroupMembers;
