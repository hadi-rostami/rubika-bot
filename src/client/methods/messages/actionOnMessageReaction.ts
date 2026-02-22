import Client from "../../client";

async function actionOnMessageReaction(
  this: Client,
  object_guid: string,
  message_id: string,
  reaction_id: number | null = null,
  action: "Add" | "Remove" = "Add"
) {
  if (action === "Remove") reaction_id = null;

  const input = {
    object_guid,
    message_id,
    action,
    reaction_id,
  };

  return await this.builder("actionOnMessageReaction", input);
}

export default actionOnMessageReaction;
