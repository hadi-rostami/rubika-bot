import Client from "../../client";

async function sendCode(
  this: Client,
  phone_number: string,
  pass_key?: string,
  send_type: string = "SMS",
) {
  if (!["SMS", "Internal"].includes(send_type)) {
    this.logger.error(
      "`send_type` should be `SMS` or `Internal`. Using default `SMS`.",
      "warn",
    );
    send_type = "SMS";
  }

  const data = {
    phone_number,
    pass_key,
    send_type,
  };

  const result = await this.builder("sendCode", data, true);

  return result;
}

export default sendCode;
