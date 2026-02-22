import Client from "../../client";

async function searchStickers(
  this: Client,
  search_text: string,
  start_id: string
) {
  return await this.builder("searchStickers", { search_text, start_id });
}

export default searchStickers;
