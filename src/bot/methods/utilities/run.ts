import Bot from "../../bot";
import { UpdateEndpointTypeEnum } from "../../types/enums";

async function run(
  this: Bot,
  url?: string,
  host?: string,
  port: number = 3000,
  updates: UpdateEndpointTypeEnum[] = [
    UpdateEndpointTypeEnum.SearchSelectionItems,
    UpdateEndpointTypeEnum.ReceiveInlineMessage,
    UpdateEndpointTypeEnum.GetSelectionItem,
    UpdateEndpointTypeEnum.ReceiveUpdate,
    UpdateEndpointTypeEnum.ReceiveQuery,
  ],
) {
  while (!this.initialize) {
    await this.network.delay(2000);
  }
  if (url) await this.setupWebhook(url, host, port, updates);
  else await this.polling();
}

export default run;
