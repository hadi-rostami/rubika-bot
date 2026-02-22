import Client from "../../client";

async function join(this: Client, chat: string) {
  if (chat.startsWith("c0")) return await this.joinChannelAction(chat);
  else if (chat.includes("joing")) return await this.joinGroup(chat);
  else if (chat.includes("joinc")) return await this.joinChannelByLink(chat);
}

export default join;
