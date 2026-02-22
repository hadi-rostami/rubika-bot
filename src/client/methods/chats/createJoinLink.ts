import Client from "../../client";

async function createJoinLink(
  this: Client,
  object_guid: string,
  title: string,
  request_needed: boolean,
  usage_limit: number,
  expire_time: number
) {
  return await this.builder("createJoinLink", {
    object_guid,
    title,
    request_needed,
    usage_limit,
    expire_time,
  });
}

export default createJoinLink;
