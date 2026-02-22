import Client from "../../client";

async function getPendingObjectOwner(this: Client, object_guid: string) {
  return await this.builder("getPendingObjectOwner", { object_guid });
}

export default getPendingObjectOwner;
