import Client from "../../client";

async function getJoinLinks(this: Client, object_guid: string) {
  return await this.builder("getJoinLinks", { object_guid });
}

export default getJoinLinks;
