import Client from "../../client";

async function downloadProfilePicture(
  this: Client,
  object_guid: string,
): Promise<Buffer | null> {
  const avatarsInfo = await this.getAvatars(object_guid);
  if (!avatarsInfo || !avatarsInfo.avatars?.[0]?.main) return null;

  const avatar = avatarsInfo.avatars[0].main;
  const url = `https://messenger${avatar.dc_id}.iranlms.ir/InternFile.ashx?id=${avatar.file_id}&ach=${avatar.access_hash_rec}`;

  try {
    const res = await fetch(url, {
      method: "GET",
    });

    if (!res.ok) return null;

    const arrayBuffer = await res.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (err) {
    this.logger.error("Failed to download profile picture:" + err, "warn");

    return null;
  }
}

export default downloadProfilePicture;
