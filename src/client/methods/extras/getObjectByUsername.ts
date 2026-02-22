import Client from "../../client";

async function getObjectByUsername(this: Client, username: string) {
  return await this.builder("getObjectByUsername", {
    username: username.replace("@", ""),
  });
}

export default getObjectByUsername;
