import Client from "../../client";

async function seenChannelMessages(
  this: Client,
  channel_guid: string,
  min_id: string | number,
  max_id: string | number
) {
  return await this.builder("seenChannelMessages", {
    channel_guid,
    min_id,
    max_id,
  });
}

export default seenChannelMessages;
