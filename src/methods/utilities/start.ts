import Bot from "../../bot";
import { prompt } from "../../utils";

async function start(this: Bot, token?: string) {
  if (!this.token) {
    if (token) this.token = token;
    else {
      const token = await prompt("[start] Please enter your bot token: ");
      return await this.start(token);
    }
  }

  try {
    const res = await this.getMe();
    this.bot = res.bot;
  } catch (err) {
    throw this.logger.error(`[start] error in token maby:${err}`, "warn");
  }

  this.initialize = true;
}

export default start;
