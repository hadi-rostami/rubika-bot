import Client from "../../client";

async function getChatsUpdates(
  this: Client,
  state = Math.round(Date.now() / 1000) - 150
) {
  return await this.builder("getChatsUpdates", { state });
}

export default getChatsUpdates;
