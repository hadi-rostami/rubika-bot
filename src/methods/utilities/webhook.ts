import Bot from "../../bot";
import handleUpdates from "./handleUpdates";
import { UpdateEndpointTypeEnum } from "../../types/enums";

function lowerFirstChar(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

async function setupWebhook(
  this: Bot,
  url: string,
  host: string = "0.0.0.0",
  port: number = 3000,
  updates: UpdateEndpointTypeEnum[] = []
) {
  // create server
  Bun.serve({
    port,
    hostname: host,
    development: false,
    fetch: async (req) => {
      const url = new URL(req.url);
      const path = url.pathname;

      if (path === "/") {
        await handleUpdates.call(this, req);
      }
      for (const update of updates) {
        if (path === `/${lowerFirstChar(update)}`) {
          await handleUpdates.call(this, req);
        }
      }

      return new Response(JSON.stringify({ status: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  });

  // set-endpoints
  for (const update of updates) {
    const res = await this.updateBotEndpoints(url, update);

    if (res.status !== "Done") {
      console.error(
        `[ setupWebhook ] status updateBotEndpoints is ${res.status} for update: ${update}`
      );
    }
  }

  console.log("✔ Start Robot... [ hook mode ]");
}

export default setupWebhook;
