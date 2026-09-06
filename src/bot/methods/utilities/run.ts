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
  try {
    while (!this.initialize) {
      this.logger.debug("Waiting for bot initialization...");
      await this.network.delay(2000);
    }

    this.logger.info("Bot initialized. Starting runner...");

    if (url) {
      this.logger.info(`Starting in Webhook mode: ${url}`);
      await this.setupWebhook(url, host, port, updates);
    } else {
      this.logger.info("Starting in Polling mode");
      await this.polling();
    }
  } catch (error) {
    this.logger.error("Fatal error in Run module:"+ error);
  }
}

export default run;