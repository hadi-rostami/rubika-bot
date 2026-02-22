import Client from "../../client";

async function actionOnJoinRequest(
  this: Client,
  object_guid: string,
  user_guid: string,
  object_type: "Group" | "Channel",
  action: "Accept" | "Reject"
) {
  return await this.builder("actionOnJoinRequest", {
    object_guid,
    user_guid,
    object_type,
    action,
  });
}

export default actionOnJoinRequest;
