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
  updates: UpdateEndpointTypeEnum[] = [],
) {
  try {
    this.logger.info(`Starting webhook server on ${host}:${port}...`);

    Bun.serve({
      port,
      hostname: host,
      development: false,
      fetch: async (req) => {
        const urlObj = new URL(req.url);
        const path = urlObj.pathname;

        try {
          if (
            path === "/" ||
            updates.some((u) => path === `/${lowerFirstChar(u)}`)
          ) {
            await handleUpdates.call(this, req);
            return new Response(JSON.stringify({ status: "OK" }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
          return new Response(JSON.stringify({ status: "Not Found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          this.logger.error(`Error processing update from ${path}: ${error}`);

          return new Response(
            JSON.stringify({ status: "Internal Server Error" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            },
          );
        }
      },
    });

    this.logger.debug(`Webhook server is listening on http://${host}:${port}`);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    this.logger.debug(`Setting up ${updates.length} endpoint(s)...`);

    for (const update of updates) {
      try {
        const res = await this.updateBotEndpoints(url, update);

        if (res.status_message !== "OK" && res.status !== "Done") {
          this.logger.warn(
            `Failed to set endpoint for ${update}. Status: ${res.status} | Message: ${res.status_message}`,
          );
        } else {
          this.logger.debug(`Endpoint set successfully for: ${update}`);
        }
      } catch (err) {
        this.logger.error(
          `Exception while setting endpoint for ${update}: ${err}`,
        );
      }
    }

    this.logger.info("✔ Robot started successfully in [hook mode]");
    console.log(`Bot started successfully in [hook mode]`);
  } catch (error) {
    this.logger.error("Fatal error during webhook setup: " + error);
    throw error;
  }
}

export default setupWebhook;
