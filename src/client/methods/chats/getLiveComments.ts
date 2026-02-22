import Client from "../../client";

async function getLiveComments(
  this: Client,
  access_token: string,
  live_id: string
) {
  return await this.builder("getLiveComments", { access_token, live_id });
}

export default getLiveComments;
