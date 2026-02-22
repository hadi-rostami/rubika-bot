import Client from "../../client";

async function removeFromMyGifSet(this: Client, file_id: string) {
  return await this.builder("removeFromMyGifSet", { file_id });
}

export default removeFromMyGifSet;
