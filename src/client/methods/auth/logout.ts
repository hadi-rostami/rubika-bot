import Client from "../../client";

async function logout(this: Client) {
  return await this.builder("logout", {});
}

export default logout;
