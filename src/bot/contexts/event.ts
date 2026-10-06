import Bot from "..";
import { inspect } from "util";
import { FileSource } from "../types/methods";
import { ChatKeypadTypeEnum, UpdateTypeEnum } from "../types/enums";
import {
  EventMessage,
  Keypad,
  InlineKeypad,
  EventData,
} from "../types/interfaces";

class Event<T> {
  type: UpdateTypeEnum;
  chat_id: string;
  update_time: number;
  event_data: EventData;
  store: Partial<T> = {};
  declare bot: Bot;

  constructor(
    private ctx: EventMessage,
    bot: Bot,
  ) {
    this.type = ctx.type;
    this.chat_id = ctx.chat_id;
    this.update_time = ctx.update_time;
    this.event_data = ctx.event_data!;
    this.bot = bot;
  }

  reply = async (
    text: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendMessage(
      this.chat_id,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyImage = async (
    file: FileSource,
    text?: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendImage(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyVideo = async (
    file: FileSource,
    text?: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendVideo(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyGif = async (
    file: FileSource,
    text?: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendGif(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replySticker = async (
    sticker_id: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendSticker(
      this.chat_id,
      sticker_id,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyMusic = async (
    file: FileSource,
    text?: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendMusic(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyVoice = async (
    file: FileSource,
    text?: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendVoice(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyFile = async (
    file: FileSource,
    text?: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendFile(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyLocation = async (
    latitude: string,
    longitude: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendLocation(
      this.chat_id,
      latitude,
      longitude,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyContact = async (
    first_name: string,
    last_name: string,
    phone_number: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | false = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendContact(
      this.chat_id,
      first_name,
      last_name,
      phone_number,
      chat_keypad,
      inline_keypad,
      disable_notification,
      undefined,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyPoll = async (
    question: string,
    options: string[],
    auto_delete: number | false = false,
  ) => {
    return await this.bot.sendPoll(
      this.chat_id,
      question,
      options,
      auto_delete,
    );
  };

  [inspect.custom]() {
    return this.ctx;
  }
}

export default Event;
