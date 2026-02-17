import Bot from "../..";

async function builder(
  this: Bot,
  method: string,
  input: object = {},
): Promise<any> {
  if (!this.token) {
    throw this.logger.error(
      "[builder] Bot token is not set. Please provide a valid token.",
      "error",
    );
  }

  const response: any = await this.network.request(method, input);

  if (response?.status !== "OK") {
    throw this.logger.error(
      `[builder] error in request ${method}:\n ${JSON.stringify(response, null, 2)}`,
      "error",
    );
  }

  return response.data;
}

export default builder;
