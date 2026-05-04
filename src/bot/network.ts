import { Logger } from "../utils";
import Bot from "./bot";

export default class Network {
  constructor(
    public base_url: string,
    public logger: Logger<Bot>,
    public retryCount: number = 3,
    public timeout: number = 10000,
  ) {}

  stringifyBigInts = (obj: object): object => {
    if (Array.isArray(obj)) {
      return obj.map(this.stringifyBigInts);
    }

    if (obj !== null && typeof obj === "object") {
      const result: Record<string, unknown> = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          result[key] = this.stringifyBigInts(obj[key as keyof typeof obj]);
        }
      }
      return result;
    }

    return obj;
  };

  async request(method: string, data: object) {
    const url = this.base_url + "/" + method;

    for (let attempt = 1; attempt <= this.retryCount; attempt++) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.status === 200) {
          const responseData = await res.json();

          return responseData;
        } else {
          this.logger.error(
            `[request] attempt ${attempt}: ${res.statusText} ${res.status}`,
            "error",
          );
        }
      } catch {
        this.logger.error(
          `[request] attempt ${attempt} message: you dont have access to the internet.`,
          "error",
        );
      }

      await this.delay(1000);
    }

    this.logger.error(
      `[request] failed after ${this.retryCount} attempts { method: ${method} }`,
      "error",
    );

    return false;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
