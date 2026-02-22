import Client from "../../client";

async function getRelatedObjects(this: Client, object_guid: string) {
  return await this.builder("getRelatedObjects", { object_guid });
}

export default getRelatedObjects;
