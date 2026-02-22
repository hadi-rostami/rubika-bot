import Client from "../../client";

type AccessType =
  | "ChangeInfo"
  | "PinMessages"
  | "DeleteGlobalAllMessages"
  | "BanMember"
  | "SetAdmin"
  | "SetJoinLink"
  | "SetMemberAccess"
  | "ViewMembers"
  | "ViewAdmins"
  | "SendMessages"
  | "AddMember"
  | "ViewInfo"
  | "ViewMessages"
  | "DeleteLocalMessages"
  | "EditMyMessages"
  | "DeleteGlobalMyMessages";

async function setGroupDefaultAccess(
  this: Client,
  group_guid: string,
  access_list: AccessType[]
) {
  if (typeof access_list === "string") access_list = [access_list];

  return await this.builder("setGroupDefaultAccess", {
    group_guid,
    access_list,
  });
}

export default setGroupDefaultAccess;
