import LinkifyIt from "linkify-it";
import Inline from "./contexts/inline";
import Update from "./contexts/update";

export default class Filters {
  // Link detection engine configuration
  static linkify = new LinkifyIt({
    fuzzyEmail: false,
    fuzzyIP: false,
    fuzzyLink: true,
  });

  // Username pattern: @ followed by 3-32 alphanumeric chars or underscores
  static USERNAME_PATTERN = /@([a-zA-Z0-9_]{3,32})/;

  // Recursively search for a key in nested objects/arrays
  static findKey(message: Record<string, any>, key: string): any {
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

  // Check if message contains text
  static isText(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "text");
  }

  // Detect Persian characters in message text
  static isPersian(message: Update<unknown>): boolean {
    const text = Filters.findKey(message, "text");
    if (!text) return false;

    for (const char of text) {
      const code = char.charCodeAt(0);
      if (
        (code >= 0x0621 && code <= 0x064a) || // Arabic/Persian base chars
        code === 0x067e || // پ
        code === 0x0686 || // چ
        code === 0x0698 || // ژ
        code === 0x06af || // گ
        code === 0x200c // Zero-width non-joiner
      ) {
        return true;
      }
    }
    return false;
  }

  // Check if message contains location data
  static isLocation(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "location");
  }

  // Check if message contains hashtag
  static isTag(message: Update<unknown>): boolean {
    const text = Filters.findKey(message, "text");
    return text ? text.includes("#") : false;
  }

  // Detect spam by text length (>1000 chars)
  static isSpam(message: Update<unknown>): boolean {
    const text = Filters.findKey(message, "text");
    return text ? text.length > 1000 : false;
  }

  // Check if message is a sticker
  static isSticker(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "sticker");
  }

  // Check if message contains URLs
  static isLink(message: Update<unknown>): boolean {
    const text = Filters.findKey(message, "text");
    return text ? Filters.linkify.test(text) : false;
  }

  // Check if message contains username mentions (@user)
  static isUsername(message: Update<unknown>): boolean {
    const text = Filters.findKey(message, "text");
    return text ? Filters.USERNAME_PATTERN.test(text) : false;
  }

  // Check if message is forwarded
  static isForward(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "forwarded_from");
  }

  // Check if message is a reply
  static isReply(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "reply_to_message_id");
  }

  // Check if message contains contact info
  static isContact(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "contact_message");
  }

  // Check if message is a poll
  static isPoll(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "poll");
  }

  // Check if message contains live location
  static isLiveLocation(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "live_location");
  }

  // Check if message contains file attachment
  static isFile(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "file");
  }

  // Check if message contains mention links in metadata
  static isMention(message: Update<unknown>): boolean {
    return !!Filters.findKey(
      Filters.findKey(message, "meta_data_parts") || {},
      "link",
    );
  }

  // Check if message has markdown metadata
  static isMarkdown(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "metadata");
  }

  // Check if message was deleted
  static isDelete(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "removed_message_id");
  }

  // Check if message contains payment update
  static isPayment(message: Update<unknown>): boolean {
    return !!Filters.findKey(message, "updated_payment");
  }

  // Check if chat is private (ID starts with "b0")
  static isPrivate(message: Update<unknown> | Inline<unknown>): boolean {
    return message.chat_id.startsWith("b0");
  }

  // Check if chat is a group (ID starts with "g0")
  static isGroup(message: Update<unknown> | Inline<unknown>): boolean {
    return message.chat_id.startsWith("g0");
  }

  // Check if chat is a channel (ID starts with "c0")
  static isChannel(message: Update<unknown> | Inline<unknown>): boolean {
    return message.chat_id.startsWith("c0");
  }

  // Check if event is a new message
  static isNewMessage(message: Update<unknown>): boolean {
    return message.type === "NewMessage";
  }

  // Check if event is an updated message
  static isUpdatedMessage(message: Update<unknown>): boolean {
    return message.type === "UpdatedMessage";
  }

  // Check if event is a removed message
  static isRemovedMessage(message: Update<unknown>): boolean {
    return message.type === "RemovedMessage";
  }

  // Check if user started the bot
  static isStartedBot(message: Update<unknown>): boolean {
    return message.type === "StartedBot";
  }

  // Check if user stopped the bot
  static isStoppedBot(message: Update<unknown>): boolean {
    return message.type === "StoppedBot";
  }

  // Check if event is a payment update
  static isUpdatedPayment(message: Update<unknown>): boolean {
    return message.type === "UpdatedPayment";
  }

  // Create filter function to match specific button ID
  static kypadID(
    button_id: string,
  ): (message: Update<unknown> | Inline<unknown>) => boolean {
    return (message: Update<unknown> | Inline<unknown>) => {
      const res = Filters.findKey(message, "button_id");
      return res === button_id;
    };
  }
}
