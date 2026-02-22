import Client from "../../client";

async function getObjectInfoByUsername(this: Client, username: string) {
  return await this.builder("getObjectInfoByUsername", {
    username: username.replace("@", ""),
  });
}

export default getObjectInfoByUsername;
