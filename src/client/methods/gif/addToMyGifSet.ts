import Client from "../../client";

async function addToMyGifSet(
  this: Client,
  object_guid: string,
  message_id: string
) {
  return await this.builder("addToMyGifSet", { object_guid, message_id });
}

export default addToMyGifSet;
