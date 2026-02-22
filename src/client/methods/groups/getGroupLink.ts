import Client from "../../client";

async function getGroupLink(this: Client , group_guid : string) {
  return await this.builder('getGroupLink', {group_guid});
}

export default getGroupLink;