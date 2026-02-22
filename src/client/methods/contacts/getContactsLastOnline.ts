import Client from "../../client";

async function getContactsLastOnline(this: Client, user_guids: string[]) {
  return await this.builder("getContactsLastOnline", { user_guids });
}

export default getContactsLastOnline;
