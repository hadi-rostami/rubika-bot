import Client from "../client";
import Chat from "../contexts/chat.type";
import Activities from "../contexts/activities.type";
import Message from "../contexts/message.type";
import Notifications from "../contexts/notifications.type";

export interface Session {
  phone: string;
  auth: string;
  guid: string;
  agent: string;
  private_key: string;
}

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

export interface ContextMap {
  chat: Chat;
  message: Message;
  activities: Activities;
  notifications: Notifications;
  error: {
    message: string;
    client: Client;
  };
}

export interface ContextMapCon {
  chat: Chat;
  message: Message;
  activities: Activities;
  notifications: Notifications;
}

export type Handler<T> = {
  filters: Array<(ctx: T) => boolean | Promise<boolean>>;
  handler: (ctx: T) => Promise<void>;
  prefix?: string | RegExp;
};
