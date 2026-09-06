import Network from "./network";
import Methods from "./methods";
import { EnhancedLogger } from "../utils/errors";
import { SessionManager } from "./utils";
import Message from "./contexts/message.type";
import {
  ContextMap,
  RubPlugin,
  Handler,
  SessionType,
  ClientConfig,
  clientConfigSimple,
} from "./types/client.type";

export default class Client extends Methods {
  public initialize = false;
  public logger: EnhancedLogger<Client>;
  public key?: Buffer<ArrayBuffer>;
  public privateKey?: string;
  public decode_auth?: string;
  public auth?: string;
  public sessionDb: SessionManager;
  public network: Network;
  public plugins: RubPlugin[] = [];
  public userGuid?: string;
  public config: ClientConfig;
  public handlers: {
    [K in keyof ContextMap<unknown>]: Handler<ContextMap<unknown>[K]>[];
  } = {
    chat: [],
    message: [],
    activities: [],
    notifications: [],
  };

  constructor(
    private session: SessionType,
    config?: ClientConfig,
  ) {
    super();

    this.config = { ...clientConfigSimple, ...config };
    this.sessionDb = new SessionManager(this.session);
    this.logger = new EnhancedLogger<Client>(this, {
      minLevel: this.config.logLevel,
    });

    this.network = new Network(this);
    this.start();
  }

  on<T, K extends keyof typeof this.handlers>(
    type: K,
    handler: (ctx: ContextMap<T>[K]) => Promise<void>,
  ): void;

  on<T, K extends keyof typeof this.handlers>(
    type: K,
    filters: Array<(ctx: ContextMap<T>[K]) => boolean | Promise<boolean>>,
    handler: (ctx: ContextMap<T>[K]) => Promise<void>,
  ): void;

  on<T, K extends keyof typeof this.handlers>(
    type: K,
    filtersOrHandler:
      | Array<(ctx: ContextMap<T>[K]) => boolean | Promise<boolean>>
      | ((ctx: ContextMap<T>[K]) => Promise<void>),
    maybeHandler?: (ctx: ContextMap<T>[K]) => Promise<void>,
  ) {
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
    } else {
      new Error("Invalid arguments for on()");
    }
  }

  command<T>(
    prefix: string | RegExp,
    handler: (ctx: Message<T>) => Promise<void>,
  ): void;

  command<T>(
    prefix: string | RegExp,
    filters: Array<(ctx: Message<T>) => boolean | Promise<boolean>>,
    handler: (ctx: Message<T>) => Promise<void>,
  ): void;

  command<T>(
    prefix: string | RegExp,
    filtersOrHandler:
      | Array<(ctx: Message<T>) => boolean | Promise<boolean>>
      | ((ctx: Message<T>) => Promise<void>),
    maybeHandler?: (ctx: Message<T>) => Promise<void>,
  ) {
    if (typeof filtersOrHandler === "function") {
      this.handlers["message"].push({
        filters: [],
        handler: filtersOrHandler,
        prefix,
      });
    } else if (Array.isArray(filtersOrHandler) && maybeHandler) {
      this.handlers["message"].push({
        filters: filtersOrHandler,
        handler: maybeHandler,
        prefix,
      });
    } else {
      new Error("Invalid arguments for command()");
    }
  }
}
