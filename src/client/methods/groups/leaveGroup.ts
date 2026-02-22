import Client from "../../client";

async function leaveGroup(this: Client, group_guid: string) {
  return await this.builder("leaveGroup", { group_guid });
}

export default leaveGroup;
