import Client from "../../client";

async function searchGlobalMessages(
  this: Client,
  search_text: string,
  type: "Hashtag" | "Text" = "Text"
) {
  return await this.builder("searchGlobalMessages", { search_text, type });
}

export default searchGlobalMessages;
