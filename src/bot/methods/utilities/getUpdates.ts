import Bot from "../..";

async function getUpdates(this: Bot, offset_id?: string, limit: number = 100) {
  return await this.builder("getUpdates", { offset_id, limit });
}

export default getUpdates;
