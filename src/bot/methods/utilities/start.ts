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

  const res = await this.getMe();

  if (res.status_message === "INVALID_TOKEN") {
    throw new Error("[start] parse invalid token");
  }

  this.bot = res.bot;
  this.initialize = true;
}

export default start;
