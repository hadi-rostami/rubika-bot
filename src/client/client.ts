import Network from "./network";
import Methods from "./methods";
import { SessionManager } from "./utils";
import Message from "./contexts/message.type";
import * as ClientTypes from "./types/client.type";
import { Logger } from "../utils";

export default class Client extends Methods {
  public initialize = false;
  public key?: Buffer<ArrayBuffer>;
  public privateKey?: string;
  public decode_auth?: string;
  public auth?: string;
  public sessionDb: SessionManager;
  public network: Network;
  public plugins: ClientTypes.RubPlugin[] = [];
  public userGuid?: string;
  public handlers: {
    [K in keyof ClientTypes.ContextMap]: ClientTypes.Handler<
      ClientTypes.ContextMap[K]
    >[];
  } = {
    error: [],
    chat: [],
    message: [],
    activities: [],
    notifications: [],
  };

  public logger = new Logger<Client>(this.handlers.error, this);

  constructor(
    private session: ClientTypes.SessionType,
    public platform: ClientTypes.PlatformType = "Web",
    public timeout: number = 5000,
  ) {
    super();
    this.sessionDb = new SessionManager(this.session);
    this.network = new Network(this);

    this.start();
  }

  on<T extends keyof typeof this.handlers>(
    type: T,
    handler: (ctx: ClientTypes.ContextMap[T]) => Promise<void>,
  ): void;

  on<T extends keyof typeof this.handlers>(
    type: T,
    filters: Array<
      (ctx: ClientTypes.ContextMap[T]) => boolean | Promise<boolean>
    >,
    handler: (ctx: ClientTypes.ContextMap[T]) => Promise<void>,
  ): void;

  on<T extends keyof typeof this.handlers>(
    type: T,
    filtersOrHandler:
      | Array<(ctx: ClientTypes.ContextMap[T]) => boolean | Promise<boolean>>
      | ((ctx: ClientTypes.ContextMap[T]) => Promise<void>),
    maybeHandler?: (ctx: ClientTypes.ContextMap[T]) => Promise<void>,
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
      throw new Error("Invalid arguments for on()");
    }
  }

  command(
    prefix: string | RegExp,
    handler: (ctx: Message) => Promise<void>,
  ): void;

  command(
    prefix: string | RegExp,
    filters: Array<(ctx: Message) => boolean | Promise<boolean>>,
    handler: (ctx: Message) => Promise<void>,
  ): void;

  command(
    prefix: string | RegExp,
    filtersOrHandler:
      | Array<(ctx: Message) => boolean | Promise<boolean>>
      | ((ctx: Message) => Promise<void>),
    maybeHandler?: (ctx: Message) => Promise<void>,
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
      throw new Error("Invalid arguments for command()");
    }
  }
}
