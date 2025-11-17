import { Message } from "./types/interfaces";

export default class Filters {
  static findKey(message: any, key: string): any {
    if (!message || typeof message !== "object") {
      return undefined;
    }

    const messageKeys = Object.keys(message);
    if (messageKeys.includes(key)) {
      return message[key];
    }

    for (const messageKey of messageKeys) {
      const value = message[messageKey];

      if (Array.isArray(value)) {
        for (const item of value) {
          if (typeof item === "object") {
            const found = Filters.findKey(item, key);
            if (found !== undefined) return found;
          }
        }
      }

      if (typeof value === "object") {
        const found = Filters.findKey(value, key);
        if (found !== undefined) return found;
      }
    }

    return undefined;
  }

  static isText(message: Message): boolean {
    return !!Filters.findKey(message, "text");
  }

  static isLocation(message: Message): boolean {
    return !!Filters.findKey(message, "location");
  }

  static isSticker(message: Message): boolean {
    return !!Filters.findKey(message, "sticker");
  }

  static isForward(message: Message): boolean {
    return !!Filters.findKey(message, "forwarded_from");
  }

  static isReply(message: Message): boolean {
    return !!Filters.findKey(message, "reply_to_message_id");
  }

  static isContact(message: Message): boolean {
    return !!Filters.findKey(message, "contact_message");
  }

  static isPoll(message: Message): boolean {
    return !!Filters.findKey(message, "poll");
  }

  static isLiveLocation(message: Message): boolean {
    return !!Filters.findKey(message, "live_location");
  }

  static isFile(message: Message): boolean {
    return !!Filters.findKey(message, "file");
  }

  static isMention(message: Message): boolean {
    return !!Filters.findKey(
      message.metadata?.meta_data_parts,
      "link"
    );
  }

  static isMarkdown(message: Message): boolean {
    return !!Filters.findKey(message, "metadata");
  }

  static isDelete(message: Message): boolean {
    return !!Filters.findKey(message, "removed_message_id");
  }

  static kypadID(button_id: string): (message: Message) => boolean {
    return (message: Message) => {
      const res = Filters.findKey(message, "button_id");
      return res === button_id;
    };
  }
}
