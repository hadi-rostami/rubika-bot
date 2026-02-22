import { inspect } from "util";
import { Client } from "../../..";
import { DecoratorsTypes } from "../types/index.type";

class Notifications implements DecoratorsTypes.ShowNotifications {
  notification_id: string;
  type: string;
  title: string;
  text: string;
  image_file_id?: number;
  message_data: DecoratorsTypes.MessageData;
  store: Record<string, any> = {};

  declare client: Client;

  constructor(
    client: Client,
    private update: DecoratorsTypes.ShowNotifications,
  ) {
    this.client = client;

    this.notification_id = update.notification_id;
    this.type = update.type;
    this.title = update.title;
    this.text = update.text;
    this.image_file_id = update.image_file_id;
    this.message_data = update.message_data;
  }

  [inspect.custom]() {
    return this.update;
  }
}

export default Notifications;
