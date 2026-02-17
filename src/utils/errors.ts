import Bot from "..";
import checkFilters from "./checkFilter";

class Logger {
  constructor(private errors:any) {}

  async error(text: string, type: "error" | "warn") {
    const time = new Date();
    for (let { filters, handler } of this.errors) {
      const error = `${time.toISOString()} | ⟮ ${type} ⟯ ----> ${text}\n`;
      const passed = await checkFilters(text, filters);

      if (passed) {
        await handler(error);
      }
    }
  }
}

export default Logger;
