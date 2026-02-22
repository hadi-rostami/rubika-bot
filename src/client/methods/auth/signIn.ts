import Client from "../../client";

async function signIn(
  this: Client,
  phone_code: string,
  phone_number: string,
  phone_code_hash: string,
  public_key: string
) {
  const data = {
    phone_code,
    phone_number,
    phone_code_hash,
    public_key,
  };
  const result = await this.builder("signIn", data, true);

  return result;
}

export default signIn;
