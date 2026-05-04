import Bot from "../..";

async function builder(
  this: Bot,
  method: string,
  input: object = {},
): Promise<any> {
  const response: any = await this.network.request(method, input);
  if (response === false) return { status_message: "NETWORK_ERROR" };

  if (response?.status === "OK") {
    return { ...response.data, status_message: "OK" };
  }

  if (method === "getMe" && response.status === "INVALID_ACCESS") {
    return { status_message: "INVALID_TOKEN" };
  }

  return { status_message: response.status };
}

export default builder;
