import Client from "../../client";

async function clickMessageUrl(
  this: Client,
  object_guid: string,
  message_id: string,
  link_url: string
) {
  return await this.builder("clickMessageUrl", { object_guid, message_id, link_url });
}

export default clickMessageUrl;
