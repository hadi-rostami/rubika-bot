import Bot from "../../bot";
import { UpdateEndpointTypeEnum } from "../../types/enums";

async function run(
  this: Bot,
  url?: string,
  host?: string,
  port: number = 3000,
  updates: UpdateEndpointTypeEnum[] = [
    UpdateEndpointTypeEnum.ReceiveInlineMessage,
    UpdateEndpointTypeEnum.ReceiveUpdate,
  ]
) {
  while (!this.initialize) {
    await this.network.delay(2000);
  }
  if (url) await this.__setupWebhook(url, host, port, updates);
  else await this.__polling();
}

export default run;
