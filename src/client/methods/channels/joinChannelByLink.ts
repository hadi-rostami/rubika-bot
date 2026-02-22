import Client from "../../client";

async function joinChannelByLink(this: Client, link: string) {
  if (link.includes("/")) link = link.split("/")[-1];
  return await this.builder("joinChannelByLink", { hash_link: link });
}

export default joinChannelByLink;
