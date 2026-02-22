import Client from "../../client";
import { Markdown } from "../../../utils";

async function editMessage(
  this: Client,
  object_guid: string,
  message_id: string,
  text: string,
) {
  const input = {
    object_guid,
    message_id,
    ...Markdown.toMetadata(text),
  };

  return await this.builder("editMessage", input);
}

export default editMessage;
