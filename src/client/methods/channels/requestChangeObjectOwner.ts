import Client from "../../client";

async function requestChangeObjectOwner(
  this: Client,
  new_owner_user_guid: string,
  object_guid: string
) {
  return await this.builder("requestChangeObjectOwner", {
    new_owner_user_guid,
    object_guid,
  });
}

export default requestChangeObjectOwner;
