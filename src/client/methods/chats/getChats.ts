import Client from "../../client";

async function getChats(this: Client, start_id: string) {
  return await this.builder("getChats", { start_id });
}

export default getChats;
