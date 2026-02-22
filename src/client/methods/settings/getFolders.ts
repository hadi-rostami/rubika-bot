import Client from "../../client";

async function getFolders(
  this: Client,
  last_state = Math.round(Date.now() / 1000) - 150
) {
  return await this.builder("getFolders", {last_state});
}

export default getFolders;
