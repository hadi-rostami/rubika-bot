import { inspect } from "util";
import { Client } from "../../..";
import { DecoratorsTypes } from "../types/index.type";

class Chat implements DecoratorsTypes.ChatUpdates {
  object_guid: string;
  action: string;
  chat: DecoratorsTypes.Chat;
  updated_parameters: string[];
  timestamp: string;
  type: string;
  store: Record<string, any> = {};

  declare client: Client;

  constructor(client: Client, private update: DecoratorsTypes.ChatUpdates) {
    this.client = client;

    this.object_guid = update.object_guid;
    this.action = update.action;
    this.chat = update.chat;
    this.updated_parameters = update.updated_parameters;
    this.timestamp = update.timestamp;
    this.type = update.type;
  }

  [inspect.custom]() {
    return this.update
  }
}

export default Chat;
