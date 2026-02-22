import Client from "../../client";

async function getGroupInfo(this: Client, group_guid: string) {
  return await this.builder("getGroupInfo", { group_guid });
}

export default getGroupInfo;
