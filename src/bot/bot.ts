import Network from "./network";
import Methods from "./methods";
import { EnhancedLogger } from "../utils/errors";
import Update from "./contexts/update";
import type { BotInfo } from "./types/interfaces";
import type { ContextMap, Handler, NestedFilter } from "./types/handlers";
import { BotConfig } from "./types/utils";

/**
 * Core Bot Class extending base Methods.
 *
 * This class serves as the main entry point for interacting with the Rubika Bot API.
 * It manages network requests, event handling, command registration, and logging.
 */
class Bot extends Methods {
  protected initialize: boolean = false;
  protected network: Network;
  public BASE_URL: string;
  public bot?: BotInfo;
  public config: BotConfig = {
    logLevel: "error",
    retryCount: 3,
    timeout: 10000,
  };

  // Registry for event handlers, categorized by event type (e.g., 'inline', 'update')
  public handlers: {
    [K in keyof ContextMap<unknown>]: Handler<ContextMap<unknown>[K]>[];
  } = { inline: [], update: [] };

  public logger: EnhancedLogger<Bot>;

  /**
   * Initializes a new instance of the Bot class.
   *
   * Sets up the API endpoint, configures the logging system, and establishes the network layer.
   * Automatically attempts to start the bot polling process upon instantiation.
   *
   * @param token - The unique authentication token provided by Rubika for API access.
   * @param config - Configuration object for bot behavior.
   * @param config.logLevel - Minimum severity level for logs (default: "error").
   * @param config.retryCount - Number of retry attempts for failed network requests (default: 3).
   * @param config.timeout - Timeout duration for network requests in milliseconds (default: 10000).
   */
  constructor(
    public token: string,
    config?: BotConfig,
  ) {
    super();
    this.BASE_URL = `https://botapi.rubika.ir/v3/${token}`;
    this.config = { ...this.config, ...config };
    // Initialize logger with bot context for enhanced debugging
    this.logger = new EnhancedLogger<Bot>(this, {
      minLevel: this.config.logLevel,
    });

    // Setup network layer with retry logic and timeout configurations
    this.network = new Network(
      this.BASE_URL,
      this.logger,
      this.config.retryCount,
      this.config.timeout,
    );

    // Initiate the bot's polling or connection process
    this.start();
  }

  /**
   * Registers an event listener for specific bot events.
   *
   * Allows you to define custom logic that executes when a specific event type occurs.
   * Supports both direct handler registration and middleware-style filtering.
   *
   * @param type - The event type to listen for (e.g., "inline", "update").
   * @param handler - The asynchronous function to execute when the event is triggered.
   *
   * @example
   * ```ts
   * bot.on("inline", async (ctx) => {
   *   console.log("Inline query received:", ctx.text);
   * });
   * ```
   */
  on<T, K extends keyof ContextMap<T>>(
    type: K,
    handler: (ctx: ContextMap<T>[K]) => Promise<void>,
  ): void;

  /**
   * Registers an event listener with conditional filters.
   *
   * Executes the handler only if all provided filters return true for the incoming context.
   *
   * @param type - The event type to listen for.
   * @param filters - An array of filter functions to validate the context before execution.
   * @param handler - The asynchronous function to execute if filters pass.
   *
   * @example
   * ```ts
   * bot.on("update", [filter.isText], async (ctx) => {
   *   console.log("Text message received:", ctx.text);
   * });
   * ```
   */
  on<T, K extends keyof ContextMap<T>>(
    type: K,
    filters: NestedFilter<ContextMap<T>[K]>,
    handler: (ctx: ContextMap<T>[K]) => Promise<void>,
  ): void;

  /**
   * Internal implementation for event registration.
   * Handles polymorphism for handler and filter arguments.
   */
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
   * Registers a command handler for specific prefixes.
   *
   * Matches incoming messages against a string prefix or Regular Expression.
   * Ideal for handling structured user inputs like `/start` or `!help`.
   *
   * @param prefix - The command identifier (string literal or RegExp pattern).
   * @param handler - The asynchronous function to execute upon command match.
   *
   * @example
   * ```ts
   * bot.command("/start", async (ctx) => {
   *   await ctx.reply("Welcome! I am ready to help.");
   * });
   * ```
   */
  command<T>(
    prefix: string | RegExp,
    handler: (ctx: Update<T>) => Promise<void>,
  ): void;

  /**
   * Registers a command handler with conditional filters.
   *
   * Ensures that the command is only executed if the context meets specific criteria
   * (e.g., user is admin, message is from a group).
   *
   * @param prefix - The command identifier (string literal or RegExp pattern).
   * @param filters - An array of filter functions to validate the context.
   * @param handler - The asynchronous function to execute if filters pass.
   *
   * @example
   * ```ts
   * bot.command("/ban", [filter.isAdmin], async (ctx) => {
   *   await ctx.reply("User has been banned.");
   * });
   * ```
   */
  command<T>(
    prefix: string | RegExp,
    filters: NestedFilter<ContextMap<T>["update"]>,
    handler: (ctx: Update<T>) => Promise<void>,
  ): void;

  /**
   * Internal implementation for command registration.
   * Validates arguments and pushes the handler configuration to the update queue.
   */
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
      this.logger.error(
        "Invalid arguments provided to bot.command(). Expected handler function or [filters, handler].",
      );
    }
  }
}

export default Bot;
