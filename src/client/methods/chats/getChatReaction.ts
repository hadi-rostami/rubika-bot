import Client from "../../client";

async function getChatReaction(
  this: Client,
  object_guid: string,
  min_id: string,
  max_id: string
) {
  return await this.builder("getChatReaction", { object_guid, min_id, max_id });
}

export default getChatReaction;
