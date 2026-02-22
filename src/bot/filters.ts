import LinkifyIt from "linkify-it";
import Inline from "./contexts/inline";
import Update from "./contexts/update";

export default class Filters {
  static linkify = new LinkifyIt({
    fuzzyEmail: false,
    fuzzyIP: false,
    fuzzyLink: true,
  });

  static USERNAME_PATTERN = /@([a-zA-Z0-9_]{3,32})/;

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

  static isText(message: Update): boolean {
    return !!Filters.findKey(message, "text");
  }

  static isPersian(message: Update): boolean {
    const text = Filters.findKey(message, "text");
    if (!text) return false;

    for (const char of text) {
      const code = char.charCodeAt(0);
      if (
        (code >= 0x0621 && code <= 0x064a) ||
        code === 0x067e ||
        code === 0x0686 ||
        code === 0x0698 ||
        code === 0x06af ||
        code === 0x200c
      ) {
        return true;
      }
    }
    return false;
  }

  static isLocation(message: Update): boolean {
    return !!Filters.findKey(message, "location");
  }

  static isTag(message: Update): boolean {
    const text = Filters.findKey(message, "text");
    return text ? text.includes("#") : false;
  }

  static isSpam(message: Update): boolean {
    const text = Filters.findKey(message, "text");
    return text ? text.length > 1000 : false;
  }

  static isSticker(message: Update): boolean {
    return !!Filters.findKey(message, "sticker");
  }

  static isLink(message: Update): boolean {
    const text = Filters.findKey(message, "text");
    return text ? Filters.linkify.test(text) : false;
  }

  static isUsername(message: Update): boolean {
    const text = Filters.findKey(message, "text");
    return text ? Filters.USERNAME_PATTERN.test(text) : false;
  }

  static isForward(message: Update): boolean {
    return !!Filters.findKey(message, "forwarded_from");
  }

  static isReply(message: Update): boolean {
    return !!Filters.findKey(message, "reply_to_message_id");
  }

  static isContact(message: Update): boolean {
    return !!Filters.findKey(message, "contact_message");
  }

  static isPoll(message: Update): boolean {
    return !!Filters.findKey(message, "poll");
  }

  static isLiveLocation(message: Update): boolean {
    return !!Filters.findKey(message, "live_location");
  }

  static isFile(message: Update): boolean {
    return !!Filters.findKey(message, "file");
  }

  static isMention(message: Update): boolean {
    return !!Filters.findKey(
      Filters.findKey(message, "meta_data_parts") || {},
      "link",
    );
  }

  static isMarkdown(message: Update): boolean {
    return !!Filters.findKey(message, "metadata");
  }

  static isDelete(message: Update): boolean {
    return !!Filters.findKey(message, "removed_message_id");
  }

  static isPayment(message: Update): boolean {
    return !!Filters.findKey(message, "updated_payment");
  }

  static isPrivate(message: Update | Inline): boolean {
    return message.chat_id.startsWith("b0");
  }

  static isGroup(message: Update | Inline): boolean {
    return message.chat_id.startsWith("g0");
  }

  static isChannel(message: Update | Inline): boolean {
    return message.chat_id.startsWith("c0");
  }

  static isNewMessage(message: Update): boolean {
    return message.type === "NewMessage";
  }

  static isUpdatedMessage(message: Update): boolean {
    return message.type === "UpdatedMessage";
  }

  static isRemovedMessage(message: Update): boolean {
    return message.type === "RemovedMessage";
  }

  static isStartedBot(message: Update): boolean {
    return message.type === "StartedBot";
  }

  static isStoppedBot(message: Update): boolean {
    return message.type === "StoppedBot";
  }

  static isUpdatedPayment(message: Update): boolean {
    return message.type === "UpdatedPayment";
  }

  static kypadID(button_id: string): (message: Update | Inline) => boolean {
    return (message: Update | Inline) => {
      const res = Filters.findKey(message, "button_id");
      return res === button_id;
    };
  }
}
