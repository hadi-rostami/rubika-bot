import EnhancedLogger from "../utils/errors";
import Bot from "./bot";
import {
  NetworkError,
  TimeoutError,
  ConnectionError,
  withRetry,
  RubikaError
} from "../utils/errors";

export default class Network {
  constructor(
    public base_url: string,
    public logger: EnhancedLogger<Bot>,
    public retryCount: number = 3,
    public timeout: number = 10000,
  ) {}

  // Execute API request with automatic retry and error handling
  request = async (method: string, data: object) => {
    const url = `${this.base_url}/${method}`;

    try {
      return await withRetry(async () => {
        return await this.executeRequest(url, method, data);
      }, {
        maxAttempts: this.retryCount,
        baseDelay: 1000,
        strategy: "exponential",
        // Skip retry for non-recoverable errors
        shouldRetry: (error) => {
          return !(error instanceof RubikaError &&
                  (error.code === "INVALID_TOKEN" || error.code === "BAD_REQUEST"));
        }
      });
    } catch (error) {
      if (error instanceof RubikaError) {
        this.logger?.error(error.message, "critical", { method, url, ...error.context });
      } else {
        this.logger?.error("Unknown network failure", "critical", { method, url });
      }
      throw error;
    }
  }

  // Perform single HTTP POST request with timeout
  private async executeRequest(url: string, method: string, data: object) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      this.logger.debug(`Sending request to ${method}`, { url });

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle HTTP error responses
      if (!res.ok) {
        const errorText = await res.text().catch(() => "No response body");

        if (res.status === 400) throw new Error(`Bad Request: ${errorText}`);
        if (res.status === 401) throw new Error("Unauthorized: Invalid Token");
        if (res.status === 429) throw new Error("Rate Limited");

        throw new NetworkError(
          `HTTP Error ${res.status}: ${res.statusText}`,
          res.status,
          url,
          "POST",
          errorText
        );
      }

      const responseData = await res.json();
      this.logger.debug(`Response received from ${method}\n` + JSON.stringify(responseData, null, 2));

      return responseData;

    } catch (error: unknown) {
      clearTimeout(timeoutId);

      // Convert abort signal to timeout error
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new TimeoutError(`Request to ${method} timed out after ${this.timeout}ms`, this.timeout);
      }

      // Re-throw network errors as-is
      if (error instanceof NetworkError) {
        throw error;
      }

      // Wrap unexpected errors as connection failures
      throw new ConnectionError(
        `Failed to connect to ${method}. Check your internet connection.`,
        error
      );
    }
  }

  // Utility promise-based delay
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}