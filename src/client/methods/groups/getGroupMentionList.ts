import Client from "../../client";

async function getGroupMentionList(
  this: Client,
  group_guid: string,
  search_mention?: string
) {
  return await this.builder("getGroupMentionList", {
    group_guid,
    search_mention,
  });
}

export default getGroupMentionList;
