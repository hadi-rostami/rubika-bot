import Client from "../../client";

async function getMessagesUpdates(
  this: Client,
  object_guid: string,
  state: number = Math.round(Date.now() / 1000) - 150
) {
  return await this.builder("getMessagesUpdates", { object_guid, state });
}

export default getMessagesUpdates;