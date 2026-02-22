import Client from "../../client";

async function setGroupLink(this: Client, group_guid: string) {
  return await this.builder("setGroupLink", { group_guid });
}

export default setGroupLink;
