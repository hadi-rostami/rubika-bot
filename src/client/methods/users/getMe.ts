import Client from "../../client";

async function getMe(this: Client) {
  return await this.getUserInfo()
}

export default getMe;