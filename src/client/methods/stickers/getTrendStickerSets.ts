import Client from "../../client";

async function getTrendStickerSets(
  this: Client,
  start_id: string | null = null
) {
  return await this.builder("getTrendStickerSets", { start_id: start_id });
}

export default getTrendStickerSets;
