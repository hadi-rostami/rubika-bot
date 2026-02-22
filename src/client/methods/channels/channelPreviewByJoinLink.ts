import Client from "../../client";

async function channelPreviewByJoinLink(this: Client, link: string) {
  if (link.includes("/")) link = link.split("/")[-1];

  return await this.builder("channelPreviewByJoinLink", { hash_link: link });
}

export default channelPreviewByJoinLink;
