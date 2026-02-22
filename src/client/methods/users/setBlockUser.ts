import Client from "../../client";

async function setBlockUser(
  this: Client,
  user_guid: string,
  action: "Block" | "Unblock" = "Block",
) {
  if (!["Block", "Unblock"].includes(action)) {
    this.logger.error(
      "`action` argument can only be `Block` or `Unblock`.  Using default 'Block'.",
      "warn",
    );
  }

  return await this.builder("setBlockUser", { user_guid, action });
}

export default setBlockUser;
