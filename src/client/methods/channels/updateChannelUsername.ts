import Client from "../../client";

async function updateChannelUsername(
  this: Client,
  channel_guid: string,
  username: string
) {
  return await this.builder("updateChannelUsername", {
    channel_guid,
    username: username.replace("@", ""),
  });
}

export default updateChannelUsername;
