import Client from "../../client";

async function getLiveStatus(
  this: Client,
  access_token: string,
  live_id: string,
  type: string
) {
  return await this.builder("getLiveStatus", { access_token, live_id, type });
}

export default getLiveStatus;
