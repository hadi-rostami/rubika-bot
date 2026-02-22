import Client from "../../client";

async function checkChannelUsername(this: Client, username: string) {
  return await this.builder("checkChannelUsername", {
    username: username.replace("@", ""),
  });
}

export default checkChannelUsername;
