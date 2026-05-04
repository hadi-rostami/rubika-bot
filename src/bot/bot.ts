import Network from "./network";
import Methods from "./methods";
import { Logger } from "../utils";
import Update from "./contexts/update";
import type { BotInfo } from "./types/interfaces";
import type { ContextMap, Handler, NestedFilter } from "./types/handlers";
import { BotConfig } from "./types/utils";

class Bot extends Methods {
  protected initialize: boolean = false;
  protected network: Network;
  public BASE_URL: string;
  public bot?: BotInfo;

  public handlers: {
    [K in keyof ContextMap<unknown>]: Handler<ContextMap<unknown>[K]>[];
  } = { inline: [], update: [], error: [] };

  public logger = new Logger<Bot>(this.handlers.error, this);

  /**
   * نمونه‌ای از کلاس ربات را ایجاد می‌کند.
   *
   * این سازنده اصلی‌ترین بخش برای شروع کار با ربات است.
   * با دریافت توکن و تنظیم زمان انتظار، پایه‌ی ارتباط با ای‌پی‌ای روبیکا را فراهم می‌کند.
   *
   * @param token - توکن اختصاصی ربات که برای احراز هویت در ای‌پی‌ای روبیکا استفاده می‌شود.
   * @param timeout - زمان انتظار برای درخواست‌ها به سرور (بر حسب میلی‌ثانیه). پیش‌فرض 10000 میلی‌ثانیه.
   *
   * @example
   * ```ts
   * const bot = new Bot("your-token-here", 15000);
   * ```
   */
  constructor(
    public token: string,
    config: BotConfig = { retryCount: 3, timeout: 10000 },
  ) {
    super();
    this.BASE_URL = `https://botapi.rubika.ir/v3/${token}`;
    this.network = new Network(
      this.BASE_URL,
      this.logger,
      config.timeout,
      config.retryCount,
    );

    this.start();
  }

  /**
   * یک رویداد (event) را ثبت می‌کند و با ورودی‌های مشخص، دستورات را اجرا می‌کند.
   *
   * این متد به شما امکان می‌دهد تا به ازای یک نوع خاص از رویداد (مثل پیام جدید، ورود کاربر و غیره)
   * یک تابع پردازش (handler) تعیین کنید که زمان رخ دادن آن نوع از رویداد فراخوانی می‌شود.
   *
   * @param type - نوع رویدادی که می‌خواهید به آن پاسخ دهید (مثلاً "inline"، "update" و غیره).
   * @param handler - (اختیاری) در صورتی که فیلتر وجود داشته باشد، این تابع پردازش خواهد بود.
   *
   * @example
   * ```ts
   * bot.on("inline", (ctx) => {
   *   console.log("پیام جدید دریافت شد:", ctx.text);
   * });
   *
   * bot.on("error", (err) => {
   *   console.log("ارور دریافت شد", err);
   * });
   *
   * bot.on("update", [filter.isText], (ctx) => {
   *   console.log("پیام شامل متن است:", ctx.text);
   * });
   * ```
   */
  on<T, K extends keyof ContextMap<T>>(
    type: K,
    handler: (ctx: ContextMap<T>[K]) => Promise<void>,
  ): void;

  /**
   * یک رویداد (event) را ثبت می‌کند و با ورودی‌های مشخص، دستورات را اجرا می‌کند.
   *
   * این متد به شما امکان می‌دهد تا به ازای یک نوع خاص از رویداد (مثل پیام جدید، ورود کاربر و غیره)
   * یک تابع پردازش (handler) تعیین کنید که زمان رخ دادن آن نوع از رویداد فراخوانی می‌شود.
   *
   * @param type - نوع رویدادی که می‌خواهید به آن پاسخ دهید (مثلاً "inline"، "update" و غیره).
   * @param filters - می‌تواند چند فیلتر یا تابع پردازش باشد.
   * @param handler - (اختیاری) در صورتی که فیلتر وجود داشته باشد، این تابع پردازش خواهد بود.
   *
   * @example
   * ```ts
   * bot.on("inline", (ctx) => {
   *   console.log("پیام جدید دریافت شد:", ctx.text);
   * });
   *
   * bot.on("error", (err) => {
   *   console.log("ارور دریافت شد", err);
   * });
   *
   * bot.on("update", [filter.isText], (ctx) => {
   *   console.log("پیام شامل متن است:", ctx.text);
   * });
   * ```
   */
  on<T, K extends keyof ContextMap<T>>(
    type: K,
    filters: NestedFilter<ContextMap<T>[K]>,
    handler: (ctx: ContextMap<T>[K]) => Promise<void>,
  ): void;

  on<T, K extends keyof ContextMap<T>>(
    type: K,
    filtersOrHandler?:
      | NestedFilter<ContextMap<T>[K]>
      | ((ctx: ContextMap<T>[K]) => Promise<void>),
    maybeHandler?: (ctx: ContextMap<T>[K]) => Promise<void>,
  ): void {
    if (typeof filtersOrHandler === "function") {
      this.handlers[type].push({
        filters: [],
        handler: filtersOrHandler,
      });
    } else if (Array.isArray(filtersOrHandler) && maybeHandler) {
      this.handlers[type].push({
        filters: filtersOrHandler,
        handler: maybeHandler,
      });
    }
  }

  /**
   * یک دستور (command) را ثبت می‌کند.
   *
   * این متد به شما امکان می‌دهد تا به دستوراتی با پیشوند مشخص (مثل `/start` یا `!help`) پاسخ دهید.
   * اگر پیام کاربر با پیشوند مطابقت داشته باشد، تابع پردازش مربوطه فراخوانی می‌شود.
   *
   * @param prefix - پیشوند دستور، که می‌تواند یک رشته یا یک عبارت منظم (RegExp) باشد.
   * @param handler - (اختیاری) در صورتی که فیلتر وجود داشته باشد، این تابع پردازش خواهد بود.
   *
   * @example
   * ```ts
   * bot.command("/start", (ctx) => {
   *   ctx.reply("سلام! خوش اومدی.");
   * });
   *
   * bot.command(/!help/, (ctx) => {
   *   ctx.reply("راهنمایی دریافت شد.");
   * });
   *
   * bot.command("/ban", [filter.isAdmin], (ctx) => {
   *   // فقط ادمین می‌تونه این دستور رو اجرا کنه
   *   ctx.reply("کاربر مسدود شد.");
   * });
   * ```
   */
  command<T>(
    prefix: string | RegExp,
    handler: (ctx: Update<T>) => Promise<void>,
  ): void;

  /**
   * یک دستور (command) را ثبت می‌کند.
   *
   * این متد به شما امکان می‌دهد تا به دستوراتی با پیشوند مشخص (مثل `/start` یا `!help`) پاسخ دهید.
   * اگر پیام کاربر با پیشوند مطابقت داشته باشد، تابع پردازش مربوطه فراخوانی می‌شود.
   *
   * @param prefix - پیشوند دستور، که می‌تواند یک رشته یا یک عبارت منظم (RegExp) باشد.
   * @param filters - می‌تواند چند فیلتر یا تابع پردازش باشد.
   * @param handler - (اختیاری) در صورتی که فیلتر وجود داشته باشد، این تابع پردازش خواهد بود.
   *
   * @example
   * ```ts
   * bot.command("/start", (ctx) => {
   *   ctx.reply("سلام! خوش اومدی.");
   * });
   *
   * bot.command(/!help/, (ctx) => {
   *   ctx.reply("راهنمایی دریافت شد.");
   * });
   *
   * bot.command("/ban", [filter.isAdmin], (ctx) => {
   *   // فقط ادمین می‌تونه این دستور رو اجرا کنه
   *   ctx.reply("کاربر مسدود شد.");
   * });
   * ```
   */
  command<T>(
    prefix: string | RegExp,
    filters: NestedFilter<ContextMap<T>["update"]>,
    handler: (ctx: Update<T>) => Promise<void>,
  ): void;

  command<T>(
    prefix: string | RegExp,
    filtersOrHandler:
      | NestedFilter<ContextMap<T>["update"]>
      | ((ctx: Update<T>) => Promise<void>),
    maybeHandler?: (ctx: Update<T>) => Promise<void>,
  ) {
    if (typeof filtersOrHandler === "function") {
      this.handlers.update.push({
        filters: [],
        handler: filtersOrHandler,
        prefix,
      });
    } else if (Array.isArray(filtersOrHandler) && maybeHandler) {
      this.handlers.update.push({
        filters: filtersOrHandler,
        handler: maybeHandler,
        prefix,
      });
    } else {
      this.logger.error("Invalid arguments for command()", "warn");
    }
  }
}

export default Bot;
