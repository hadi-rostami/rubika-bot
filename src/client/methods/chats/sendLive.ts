import Client from "../../client";
import ThumbnailGenerator from "../utilities/thumbnail";

async function sendLive(
  this: Client,
  title: string,
  object_guid: string,
  image: string,
  device_type = "Software"
) {
  const thumb_inline = await ThumbnailGenerator.fromVideo(image);

  return await this.builder("sendLive", {
    thumb_inline,
    device_type,
    object_guid,
    title,
    rnd: Math.floor(Math.random() * 1e6 + 1),
  });
}

export default sendLive;
