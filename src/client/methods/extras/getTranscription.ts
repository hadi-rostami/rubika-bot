import Client from "../../client";

async function getTranscription(
  this: Client,
  message_id: string,
  transcription_id: string
) {
  return await this.builder("getTranscription", {
    message_id,
    transcription_id,
  });
}

export default getTranscription;
