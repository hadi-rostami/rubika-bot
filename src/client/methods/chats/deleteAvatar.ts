import Client from "../../client";

async function deleteAvatar(
  this: Client,
  object_guid: string,
  avatar_id: string
) {
  return await this.builder("deleteAvatar", { object_guid, avatar_id });
}

export default deleteAvatar;
