import Client from "../../client";

async function getLinkFromAppUrl(this: Client, app_url: string) {
  return await this.builder("getLinkFromAppUrl", { app_url });
}

export default getLinkFromAppUrl;
