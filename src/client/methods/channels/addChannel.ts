import Client from "../../client";

interface InputType {
  title: string;
  description?: string;
  member_guids?: string[];
}

async function addChannel(
  this: Client,
  title: string,
  description?: string,
  member_guids?: string[]
) {
  let input: InputType = { title };

  if (description) input.description = description;

  if (member_guids) {
    if (typeof member_guids === "string") {
      member_guids = [member_guids];
    }

    input.member_guids = member_guids;
  }

  return await this.builder("addChannel", input);
}

export default addChannel;
