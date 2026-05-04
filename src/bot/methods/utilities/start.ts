import Bot from "../../bot";
import { prompt } from "../../../utils";

async function start(this: Bot, token?: string) {
  if (!this.token) {
    if (token) this.token = token;
    else {
      const token = await prompt("[start] Please enter your bot token: ");
      await this.start(token);
      return;
    }
  }

  try {
    const res = await this.getMe();
    this.bot = res.bot;
    
  } catch (err) {
    await this.logger.error(`[start] error in token maby:${await err}`, "warn");
    return 
  }

  this.initialize = true;
}

export default start;
