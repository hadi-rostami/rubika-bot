import { inspect } from "util";
import { Client } from "../../..";
import { DecoratorsTypes } from "../types/index.type";

class Activities implements DecoratorsTypes.ShowActivities {
  type: string;
  object_guid: string;
  object_type: string;
  user_activity_guid: string;
  store: Record<string, any> = {};

  declare client: Client;

  constructor(
    client: Client,
    private update: DecoratorsTypes.ShowActivities,
  ) {
    this.client = client;

    this.type = update.type;
    this.object_guid = update.object_guid;
    this.object_type = update.object_type;
    this.user_activity_guid = update.user_activity_guid;
  }

  [inspect.custom]() {
    return this.update;
  }
}

export default Activities;
