import Client from "../../client";

async function deleteContact(this: Client, user_guid: string) {
  return await this.builder("deleteContact", { user_guid });
}

export default deleteContact;
