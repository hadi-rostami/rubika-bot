import { FileInline } from "./types/decorators.type";
import { Filters as BotFilters } from "../bot";
import { Contexts } from ".";

class Filters {
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

  static guidType(message: Contexts.Message<any>, startWith: string): boolean {
    const result = Filters.findKey(message, "object_guid");
    return result?.startsWith(startWith) ?? false;
  }

  static isMention(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(
      message.message?.metadata?.meta_data_parts,
      "link",
    );
  }

  static isMarkdown(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message.message, "metadata");
  }

  static isReply(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message, "reply_to_message_id");
  }

  static isEdited(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message, "is_edited");
  }

  static isLink(message: Contexts.Message<any>): boolean {
    const text = Filters.findKey(message, "text");
    return text ? BotFilters.linkify.test(text) : false;
  }

  static isText(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message, "text");
  }

  static isGroup(message: Contexts.Message<any>): boolean {
    return Filters.guidType(message, "g0");
  }

  static isChannel(message: Contexts.Message<any>): boolean {
    return Filters.guidType(message, "c0");
  }

  static isPrivate(message: Contexts.Message<any>): boolean {
    return Filters.guidType(message, "u0");
  }

  static isForward(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message, "forwarded_from");
  }

  static fileInline(message: Contexts.Message<any>): FileInline | undefined {
    return message.message?.file_inline;
  }

  static isFileInline(message: Contexts.Message<any>): boolean {
    return ["FileInline", "FileInlineCaption"].includes(message.message?.type);
  }

  static isFile(message: Contexts.Message<any>): boolean {
    return Filters.fileInline(message)?.type === "File";
  }

  static isPhoto(message: Contexts.Message<any>): boolean {
    return Filters.fileInline(message)?.type === "Image";
  }

  static isSticker(message: Contexts.Message<any>): boolean {
    return Filters.fileInline(message)?.type === "Sticker";
  }

  static isVideo(message: Contexts.Message<any>): boolean {
    return Filters.fileInline(message)?.type === "Video";
  }

  static isVoice(message: Contexts.Message<any>): boolean {
    return Filters.fileInline(message)?.type === "Voice";
  }

  static isGif(message: Contexts.Message<any>): boolean {
    return Filters.fileInline(message)?.type === "Gif";
  }

  static isMusic(message: Contexts.Message<any>): boolean {
    return Filters.fileInline(message)?.type === "Music";
  }

  static isLocation(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message.message, "location");
  }

  static isContact(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message.message, "contact_message");
  }

  static isPoll(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message, "poll");
  }

  static isLive(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message, "live_data");
  }

  static isEvent(message: Contexts.Message<any>): boolean {
    return !!Filters.findKey(message, "event_data");
  }

  static isLength(length: number, object_guid?: string) {
    return (message: Contexts.Message<any>) => {
      if (object_guid) {
        if (object_guid !== message.object_guid) return false;
      }
      if (message?.message?.text) {
        return message?.message?.text.length === length;
      }
      return false;
    };
  }

  static startsWithCommand(
    text: string,
    object_guid?: string,
    length?: number,
  ) {
    return (message: Contexts.Message<any>) => {
      if (object_guid) {
        if (object_guid !== message.object_guid) return false;
      }
      if (message?.message?.text) {
        if (length) {
          if (message?.message?.text.length !== length) return false;
        }
        return message.message.text.startsWith(text);
      }
    };
  }

  static equalCommand(text: string, object_guid?: string) {
    return (message: Contexts.Message<any>) => {
      if (object_guid) {
        if (object_guid !== message.object_guid) return false;
      }
      if (message?.message?.text) {
        return message.message.text === text;
      }
    };
  }
}

export default Filters;
