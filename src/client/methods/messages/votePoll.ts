import Client from "../../client";

async function votePoll(
  this: Client,
  poll_id: string,
  selection_index: string
) {
  return await this.builder("votePoll", { poll_id, selection_index });
}

export default votePoll;
