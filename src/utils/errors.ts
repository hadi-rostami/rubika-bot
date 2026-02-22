import checkFilters from "./checkFilter";

class Logger<T> {
  constructor(
    private errors: any,
    private bot: T,
  ) {}

  async error(text: string, type: "error" | "warn") {
    const time = new Date();
    for (let { filters, handler } of this.errors) {
      const error = {
        message: `${time.toISOString()} | ⟮ ${type} ⟯ ----> ${text}\n`,
        bot: this.bot,
      };

      const passed = await checkFilters(text, filters);

      if (passed) {
        await handler(error);
      }
    }
  }
}

export default Logger;
