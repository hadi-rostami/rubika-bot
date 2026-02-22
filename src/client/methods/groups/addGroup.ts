import Client from "../../client";

async function addGroup(
  this: Client,
  title: string,
  member_guids: string | string[],
  description?: string
) {
  if (typeof member_guids === "string") member_guids = [member_guids];

  return await this.builder("addGroup", { title, member_guids, description });
}

export default addGroup;