import Client from "../client";
import Chat from "../contexts/chat.type";
import Activities from "../contexts/activities.type";
import Message from "../contexts/message.type";
import Notifications from "../contexts/notifications.type";
import { LogLevel } from "../../utils/errors";

export interface Session {
  phone: string;
  auth: string;
  guid: string;
  agent: string;
  private_key: string;
}

export interface ClientConfig {
  application?: "Shad" | "Rubika";
  platform?: "Web" | "Android";
  timeout?: number;
  logLevel?: LogLevel;
}

export const clientConfigSimple: ClientConfig = {
  application: "Rubika",
  platform: "Web",
  timeout: 5000,
  logLevel: "error",
};

export type TypeUpdate = "activities" | "chat" | "message" | "notifications";

export type SessionType = string | Session;
export type PlatformType = "Android" | "Web";

// پلاگین
type PluginFunction = (client: Client) => Promise<void>;

export interface RubPlugin {
  name: string;
  version?: string;
  run: PluginFunction;
}

export interface ContextMap<T> {
  chat: Chat<T>;
  message: Message<T>;
  activities: Activities<T>;
  notifications: Notifications<T>;
  voicechat : unknown;
}

export interface ContextMapCon<T> {
  chat: Chat<T>;
  message: Message<T>;
  activities: Activities<T>;
  notifications: Notifications<T>;
}

export type Handler<T> = {
  filters: Array<(ctx: T) => boolean | Promise<boolean>>;
  handler: (ctx: T) => Promise<void>;
  prefix?: string | RegExp;
};
