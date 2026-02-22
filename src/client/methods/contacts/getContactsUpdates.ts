import Client from "../../client";

async function getContactsUpdates(
  this: Client,
  state: number = Math.round(Date.now() / 1000) - 150
) {
  return await this.builder("getContactsUpdates", { state });
}

export default getContactsUpdates;
