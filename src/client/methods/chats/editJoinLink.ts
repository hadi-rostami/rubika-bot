import Client from "../../client";

interface InputType {
  object_guid: string;
  update_parameters: string[];
  join_link: string;
  title?: string;
  request_needed?: boolean;
  expire_time?: number;
  usage_limit?: number;
}

async function editJoinLink(
  this: Client,
  object_guid: string,
  join_link: string,
  title?: string,
  request_needed?: boolean,
  expire_time?: number,
  usage_limit?: number
) {
  let input: InputType = { object_guid, join_link, update_parameters: [] };

  if (typeof title === "string") {
    input.update_parameters.push("title");
    input.title = title;
  }
  if (typeof request_needed === "boolean") {
    input.update_parameters.push("request_needed");
    input.request_needed = request_needed;
  }
  if (typeof expire_time === "number") {
    input.update_parameters.push("expire_time");
    input.expire_time = expire_time;
  }
  if (typeof usage_limit === "number") {
    input.update_parameters.push("usage_limit");
    input.usage_limit = usage_limit;
  }


  return await this.builder("editJoinLink", input);
}

export default editJoinLink;

