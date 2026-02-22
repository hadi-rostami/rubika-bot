import Client from "../../client";

async function getStickersBySetIds(this: Client, sticker_set_ids: string[]) {
  if (typeof sticker_set_ids === "string") sticker_set_ids = [sticker_set_ids];

  return await this.builder("getStickersBySetIds", { sticker_set_ids });
}

export default getStickersBySetIds;
