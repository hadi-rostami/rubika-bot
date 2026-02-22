import Client from "../../client";

async function removeJoinLink(
  this: Client,
  object_guid: string,
  join_link: string
) {
  if (join_link.includes("/")) join_link = join_link.split("/")[-1];

  return await this.builder("revokeJoinLink", { object_guid, join_link });
}

export default removeJoinLink;
