import Bot from "../../bot";
import { prompt } from "../../../utils";
import { AuthenticationError } from "../../../utils/errors";

async function start(this: Bot, token?: string) {
  try {
    if (!this.token) {
      if (token) {
        this.token = token;
        this.logger.info("Token provided via argument.");
      } else {
        this.logger.warn("No token found. Waiting for user input...");
        const inputToken = await prompt(
          "[start] Please enter your bot token: ",
        );

        if (!inputToken) {
          throw new AuthenticationError("Token cannot be empty.");
        }

        this.token = inputToken;
        this.logger.info("Token received from user input.");
      }
    } else {
      this.logger.info("Using existing token from bot instance.");
    }

    this.logger.debug("Sending getMe request to verify token...");

    const res = await this.getMe();

    // 3. بررسی پاسخ سرور
    if (res.status_message === "INVALID_TOKEN") {
      this.logger.error(
        `Authentication failed: ${res.status_message || "Unknown error"}`,
      );
      throw new AuthenticationError(
        `Invalid token provided: ${res.status_message}`,
      );
    }

    this.bot = res.bot;
    this.initialize = true;

    this.logger.info(
      `Username: @${this.bot.username || "N/A"} | ID: ${this.bot.bot_id}`,
    );
  } catch (error) {
    if (error instanceof AuthenticationError) {
      this.logger.error("Startup aborted due to invalid token." + error);
      throw error;
    }

    this.logger.error("An unexpected error occurred during startup:" + error);
    throw error;
  }
}

export default start;
