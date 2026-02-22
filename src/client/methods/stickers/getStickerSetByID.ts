import Client from "../../client";

async function getStickerSetByID(this: Client, sticker_set_id: string) {
  return await this.builder("getStickerSetByID", { sticker_set_id });
}

export default getStickerSetByID;
