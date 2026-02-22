import Client from "../../client";

async function getBlockedUsers(this: Client) {
  return await this.builder('getBlockedUsers', {});
}

export default getBlockedUsers;