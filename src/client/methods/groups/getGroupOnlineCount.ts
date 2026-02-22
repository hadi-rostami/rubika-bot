import Client from "../../client";

async function getGroupOnlineCount(this: Client, group_guid: string) {
  return await this.builder("getGroupOnlineCount", { group_guid });
}

export default getGroupOnlineCount;
