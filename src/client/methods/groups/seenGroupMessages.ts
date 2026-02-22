import Client from "../../client";

async function seenGroupMessages(
  this: Client,
  group_guid: string,
  min_id: string | number,
  max_id: string | number
) {
  return await this.builder("seenGroupMessages", {
    group_guid,
    min_id,
    max_id,
  });
}

export default seenGroupMessages;
