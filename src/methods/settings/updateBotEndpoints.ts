import Bot from "../..";
import { UpdateEndpointTypeEnum } from "../../types/enums";

async function updateBotEndpoints(
  this: Bot,
  url: string,
  endpoint_type: UpdateEndpointTypeEnum
) {
  return await this.builder("updateBotEndpoints", {
    url,
    type: endpoint_type,
  });
}

export default updateBotEndpoints;
