import Client from "../../client";

async function groupPreviewByJoinLink(this: Client, link: string) {
  if (link.includes("/")) link = link.split("/")[-1];

  return await this.builder("groupPreviewByJoinLink", { hash_link: link });
}

export default groupPreviewByJoinLink;
