export default class Network {
  private MAX_ATTEMPTS = 3;

  constructor(public base_url: string, public timeout: number = 10000) {}

  async request(method: string, data: object) {
    const url = `${this.base_url}/${method}`;

    for (let attempt = 1; attempt <= this.MAX_ATTEMPTS; attempt++) {
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

          return JSON.parse(
            JSON.stringify(responseData, (_, v) =>
              typeof v === "bigint" ? v.toString() : v
            )
          );
        } else {
          console.warn(
            `[request] Attempt ${attempt}: Unexpected status ${res.status}`
          );
        }
      } catch (error: unknown) {
        console.error(`[request] Attempt ${attempt} failed:`, error);
      }

      await this.delay(1000);
    }

    throw new Error(
      `[request] Failed after ${this.MAX_ATTEMPTS} attempts: ${method}`
    );
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
