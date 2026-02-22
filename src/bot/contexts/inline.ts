import Bot from "..";
import { inspect } from "util";
import {
  AuxData,
  File,
  InlineKeypad,
  Keypad,
  Location,
} from "../types/interfaces";
import { ChatKeypadTypeEnum } from "../types/enums";
import { FileSource } from "../types/methods";

class Inline {
  sender_id: string;
  text: string;
  file?: File;
  location?: Location;
  aux_data?: AuxData;
  message_id: string;
  chat_id: string;
  store: Record<string, any> = {};

  declare bot: Bot;

  constructor(
    private ctx: any,
    bot: Bot,
  ) {
    this.sender_id = ctx.sender_id;
    this.text = ctx.text;
    this.file = ctx.file;
    this.location = ctx.location;
    this.aux_data = ctx.aux_data;
    this.message_id = ctx.message_id;
    this.chat_id = ctx.chat_id;
    this.bot = bot;
  }

  reply = async (
    text: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendMessage(
      this.chat_id,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyImage = async (
    text: string,
    file: FileSource,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendImage(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyVideo = async (
    text: string,
    file: FileSource,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendVideo(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyGif = async (
    text: string,
    file: FileSource,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendGif(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
      chat_keypad_type,
      auto_delete,
    );
  };

  replySticker = async (
    sticker_id: string,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendSticker(
      this.chat_id,
      sticker_id,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyMusic = async (
    text: string,
    file: FileSource,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendMusic(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyVoice = async (
    text: string,
    file: FileSource,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendVoice(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyFile = async (
    text: string,
    file: FileSource,
    chat_keypad?: Keypad,
    inline_keypad?: InlineKeypad,
    disable_notification?: boolean,
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendFile(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
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
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    return await this.bot.sendLocation(
      this.chat_id,
      latitude,
      longitude,
      chat_keypad,
      inline_keypad,
      disable_notification,
      this.message_id,
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
    auto_delete: number | boolean = false,
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
      this.message_id,
      chat_keypad_type,
      auto_delete,
    );
  };

  replyPoll = async (
    question: string,
    options: string[],
    auto_delete: number | boolean = false,
  ) => {
    return await this.bot.sendPoll(
      this.chat_id,
      question,
      options,
      auto_delete,
    );
  };

  forward = async (to_chat_id: string) => {
    return await this.bot.forwardMessage(
      this.chat_id,
      this.message_id,
      to_chat_id,
    );
  };

  delete = async (messae_id?: string) => {
    return await this.bot.deleteMessage(
      this.chat_id,
      messae_id || this.message_id,
    );
  };

  editMessage = async (text?: string, inline_keypad?: InlineKeypad) => {
    if (text)
      await this.bot.editMessageText(this.chat_id, text, this.message_id);

    if (inline_keypad)
      await this.bot.editMessageKeypad(
        this.chat_id,
        this.message_id,
        inline_keypad,
      );
  };

  [inspect.custom]() {
    return this.ctx;
  }
}

export default Inline;
