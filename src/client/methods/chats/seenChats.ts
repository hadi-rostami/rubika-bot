import Client from "../../client";

async function seenChats(this: Client, seen_list: Record<string, unknown>) {
  return await this.builder("seenChats", { seen_list });
}

export default seenChats;
