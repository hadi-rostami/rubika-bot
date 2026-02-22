import Client from "../../client";

async function getMessages(
  this: Client,
  object_guid: string,

  max_id: string,
  limit: string,
  sort: "FromMin" | "FromMax" = "FromMax",
  filter_type?:
    | "Music"
    | "File"
    | "Media"
    | "Voice"
    | "Gif"
    | "Groups"
    | "Channels"
) {
  return await this.builder("getMessages", {
    object_guid,
    filter_type,
    max_id,
    limit,
    sort,
  });
}

export default getMessages;
