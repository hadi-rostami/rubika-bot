import Client from "../../client";

async function removeChannel(this: Client, channel_guid: string) {
  return await this.builder("removeChannel", { channel_guid });
}

export default removeChannel;
