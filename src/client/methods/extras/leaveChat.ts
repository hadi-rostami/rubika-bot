import Client from "../../client";

async function leaveChat(this: Client, object_guid: string) {
  if (object_guid.startsWith("c0"))
    return await this.joinChannelAction(object_guid, "Remove");
  if (object_guid.startsWith("g0")) return await this.leaveGroup(object_guid);
}

export default leaveChat;
