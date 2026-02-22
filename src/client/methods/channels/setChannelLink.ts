import Client from "../../client";

async function setChannelLink(this: Client, channel_guid: string) {
  return await this.builder("setChannelLink", { channel_guid });
}

export default setChannelLink;
