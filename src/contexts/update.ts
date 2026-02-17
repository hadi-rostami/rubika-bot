import Bot from "..";
import util from "util";
import { ChatKeypadTypeEnum, UpdateTypeEnum } from "../types/enums";
import { FileSource } from "../types/methods";
import {
  InlineKeypad,
  Keypad,
  Message,
  PaymentStatus,
} from "../types/interfaces";

class Update {
  type: UpdateTypeEnum;
  chat_id: string;
  removed_message_id?: string;
  new_message?: Message;
  updated_message?: Message;
  updated_payment?: PaymentStatus;
  store: Record<string, any> = {};
  declare bot: Bot;

  constructor(ctx: any, bot: Bot) {
    this.type = ctx.type;
    this.chat_id = ctx.chat_id;
    this.removed_message_id = ctx.removed_message_id;
    this.new_message = ctx.new_message;
    this.updated_message = ctx.updated_message;
    this.updated_payment = ctx.updated_payment;
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
    const replyId = this.ensureReply();

    return await this.bot.sendMessage(
      this.chat_id,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    const replyId = this.ensureReply();

    return await this.bot.sendImage(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    const replyId = this.ensureReply();

    return await this.bot.sendVideo(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    const replyId = this.ensureReply();

    return await this.bot.sendGif(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    const replyId = this.ensureReply();

    return await this.bot.sendSticker(
      this.chat_id,
      sticker_id,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    const replyId = this.ensureReply();

    return await this.bot.sendMusic(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    const replyId = this.ensureReply();

    return await this.bot.sendVoice(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    auto_delete: number | boolean = false,
    chat_keypad_type?: ChatKeypadTypeEnum | undefined,
  ) => {
    const replyId = this.ensureReply();

    return await this.bot.sendFile(
      this.chat_id,
      file,
      text,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    const replyId = this.ensureReply();

    return await this.bot.sendLocation(
      this.chat_id,
      latitude,
      longitude,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    const replyId = this.ensureReply();

    return await this.bot.sendContact(
      this.chat_id,
      first_name,
      last_name,
      phone_number,
      chat_keypad,
      inline_keypad,
      disable_notification,
      replyId,
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
    const messae_id = this.ensureReply();
    if (typeof messae_id !== "string")
      throw this.bot.logger.error("No data to forward message", "warn");

    return await this.bot.forwardMessage(this.chat_id, messae_id, to_chat_id);
  };

  delete = async (messae_id?: string) => {
    const replyId = this.ensureReply();
    if (typeof replyId !== "string")
      throw this.bot.logger.error("No data to delete message", "warn");

    return await this.bot.deleteMessage(this.chat_id, messae_id || replyId);
  };

  banUser = async (userId?: string) => {
    const user = this.ensureReply(true);

    if (!user && !userId)
      throw this.bot.logger.error("No data to ban user", "warn");

    //@ts-ignore
    return await this.bot.banChatMember(this.chat_id, userId || user);
  };

  unbanUser = async (userId?: string) => {
    const user = this.ensureReply(true);
    if (!user && !userId)
      throw this.bot.logger.error("No data to unban user", "warn");

    //@ts-ignore
    return await this.bot.banChatMember(this.chat_id, userId || user);
  };

  editMessage = async (text?: string, inline_keypad?: InlineKeypad) => {
    const message_id = this.ensureReply();
    if (!text && !inline_keypad && !message_id)
      throw this.bot.logger.error("No data to edit message", "warn");
    //@ts-ignore
    if (text) await this.bot.editMessageText(this.chat_id, text, message_id);
    if (inline_keypad) {
      //@ts-ignore
      await this.bot.editMessageKeypad(this.chat_id, message_id, inline_keypad);
    }
  };

  private ensureReply(isId = false) {
    const msg = this.new_message ?? this.updated_message;
    if (!msg) {
      throw this.bot.logger.error("No message to reply to", "warn");
    }
    return isId ? msg.sender_id : msg.message_id;
  }

  [util.inspect.custom]() {
    return {
      type: this.type,
      chat_id: this.chat_id,
      removed_message_id: this.removed_message_id,
      new_message: this.new_message,
      updated_message: this.updated_message,
      updated_payment: this.updated_payment,
      store: this.store,
    };
  }
}

export default Update;
