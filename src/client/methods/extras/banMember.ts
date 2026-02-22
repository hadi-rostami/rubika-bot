import Client from "../../client";

async function banMember(
  this: Client,
  object_guid: string,
  member_guid: string,
  action: "Set" | "Unset" = "Set",
) {
  if (object_guid.startsWith("g0"))
    return await this.banGroupMember(object_guid, member_guid, action);
  else if (object_guid.startsWith("c0"))
    return await this.banChannelMember(object_guid, member_guid, action);
}

export default banMember;
