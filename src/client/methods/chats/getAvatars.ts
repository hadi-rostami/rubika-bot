import Client from "../../client";

async function getAvatars(this: Client, object_guid: string) {
  return await this.builder("getAvatars", { object_guid });
}

export default getAvatars;
