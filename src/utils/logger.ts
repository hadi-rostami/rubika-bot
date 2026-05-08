import { ContextMap, Handler } from "../client/types/client.type";
import checkFilters from "./checkFilter";

class Logger<T> {
  constructor(
    private errors: Handler<ContextMap<unknown>["error"]>[],
    private bot: T,
  ) {}

  async error(text: string, type: "error" | "warn") {
    const error = {
      message: `⟮ ${type} ⟯ ----> ${text}`,
      bot: this.bot,
    };

    for (const { filters, handler } of this.errors) {
      const passed = await checkFilters(text, filters);

      if (passed) {
        await handler(error as any);
      }
    }
  }
}

export default Logger;
