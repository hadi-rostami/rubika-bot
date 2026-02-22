import Client from "../../client";

async function getAbsObjects(this: Client, object_guids: string[]) {
  if (typeof object_guids === "string") object_guids = [object_guids];

  return await this.builder("getAbsObjects", { object_guids });
}

export default getAbsObjects;
