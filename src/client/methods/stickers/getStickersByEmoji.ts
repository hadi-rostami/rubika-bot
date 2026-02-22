import Client from "../../client";

async function getStickersByEmoji(
  this: Client,
  emoji: string,
  suggest_by: string = "All"
) {
  return await this.builder("getStickersByEmoji", { emoji, suggest_by });
}

export default getStickersByEmoji;
