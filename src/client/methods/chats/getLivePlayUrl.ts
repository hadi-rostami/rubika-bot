import Client from "../../client";

async function getLivePlayUrl(
  this: Client,
  access_token: string,
  live_id: string
) {
  return await this.builder("getLivePlayUrl", { access_token, live_id });
}

export default getLivePlayUrl;
