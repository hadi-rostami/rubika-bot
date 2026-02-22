import Client from "../../client";

async function cancelChangeObjectOwner(this: Client, object_guid: string) {
  return await this.builder("cancelChangeObjectOwner", { object_guid });
}

export default cancelChangeObjectOwner;
