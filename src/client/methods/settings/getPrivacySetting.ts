import Client from "../../client";

async function getPrivacySetting(this: Client) {
  return await this.builder('getPrivacySetting', {});
}

export default getPrivacySetting;