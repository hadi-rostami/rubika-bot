import Client from "../../client";

async function getInfo(this: Client, object_guid?: string, username?: string) {
  if (typeof object_guid === "string") {
    if (object_guid.startsWith("g0"))
      return await this.getGroupInfo(object_guid);
    else if (object_guid.startsWith("c0"))
      return await this.getChannelInfo(object_guid);
    else if (object_guid.startsWith("u0"))
      return await this.getUserInfo(object_guid);
  }

  if (typeof username === "string")
    return await this.getObjectInfoByUsername(username);
}

export default getInfo;
