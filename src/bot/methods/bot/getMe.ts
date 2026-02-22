import Bot from "../..";


async function getMe(this: Bot) {
  return await this.builder("getMe", {});
}

export default getMe;
