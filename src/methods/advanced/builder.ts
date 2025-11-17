import Bot from "../..";

async function builder(
  this: Bot,
  method: string,
  input: object = {}
): Promise<any> {
  if (!this.token) {
    throw new Error(
      "[builder] Bot token is not set. Please provide a valid token."
    );
  }

  const response: any = await this.network.request(method, input);

  if (response?.status === "OK") {
    return response.data;
  }

  throw new Error(`[builder] error in request ${method}:\n ${response} `);
}

export default builder;
