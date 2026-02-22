import Client from "../../client";

async function getPollOptionVoters(
  this: Client,
  poll_id: string,
  selection_index: string,
  start_id: string | null = null
){
  return await this.builder("getPollOptionVoters", {
    poll_id,
    selection_index,
    start_id,
  });
}

export default getPollOptionVoters;