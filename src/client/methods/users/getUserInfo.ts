import Client from "../../client";

async function getUserInfo(
  this: Client,
  user_guid: string | null = null
): Promise<any> {
  const result: any = await this.builder(
    "getUserInfo",
    user_guid ? { user_guid } : {},
    this.auth ? false : true
  );

  return result;
}
export default getUserInfo;