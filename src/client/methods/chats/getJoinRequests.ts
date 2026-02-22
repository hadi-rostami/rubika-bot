import Client from "../../client";

async function getJoinRequests(this: Client, object_guid: string) {
  return await this.builder("getJoinRequests", { object_guid });
}

export default getJoinRequests;
