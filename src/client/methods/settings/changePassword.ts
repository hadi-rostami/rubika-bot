import Client from "../../client";

async function changePassword(
  this: Client,
  password: string,
  new_password: string,
  new_hint: string
) {
  return await this.builder("changePassword", { password, new_password, new_hint });
}

export default changePassword;
