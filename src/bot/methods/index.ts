import Bot from "../bot";

// types

import * as BotMethods from "./bot";
import * as Advanced from "./advanced";
import * as Utilities from "./utilities";
import * as Files from "./files";
import * as Messages from "./messages";
import * as Chat from "./chat";
import * as Settings from "./settings";

import * as Types from "../types/interfaces";

export default class Methods {
  // advanced
  async builder(
    this: Bot,
    ...args: Parameters<typeof Advanced.builder>
  ): Promise<any> {
    return Advanced.builder.apply(this, args);
  }

  // bot
  async getMe(
    this: Bot,
    ...args: Parameters<typeof BotMethods.getMe>
  ): Promise<Types.Bot> {
    return BotMethods.getMe.apply(this, args);
  }

  // files
  async getFile(
    this: Bot,
    ...args: Parameters<typeof Files.getFile>
  ): Promise<any> {
    return Files.getFile.apply(this, args);
  }
  async requestSendFile(
    this: Bot,
    ...args: Parameters<typeof Files.requestSendFile>
  ): Promise<{ upload_url: string }> {
    return Files.requestSendFile.apply(this, args);
  }

  async uploadFile(
    this: Bot,
    ...args: Parameters<typeof Files.uploadFile>
  ): Promise<Types.UploadFile> {
    return Files.uploadFile.apply(this, args);
  }

  async _sendFile(
    this: Bot,
    ...args: Parameters<typeof Files._sendFile>
  ): Promise<Types.SendMessage> {
    return Files._sendFile.apply(this, args);
  }

  async sendMessage(
    this: Bot,
    ...args: Parameters<typeof Messages.sendMessage>
  ): Promise<Types.SendMessage> {
    return Messages.sendMessage.apply(this, args);
  }
  async sendMusic(
    this: Bot,
    ...args: Parameters<typeof Messages.sendMusic>
  ): Promise<Types.SendMessage> {
    return Messages.sendMusic.apply(this, args);
  }
  async sendFile(
    this: Bot,
    ...args: Parameters<typeof Messages.sendFile>
  ): Promise<Types.SendMessage> {
    return Messages.sendFile.apply(this, args);
  }
  async sendGif(
    this: Bot,
    ...args: Parameters<typeof Messages.sendGif>
  ): Promise<Types.SendMessage> {
    return Messages.sendGif.apply(this, args);
  }
  async sendImage(
    this: Bot,
    ...args: Parameters<typeof Messages.sendImage>
  ): Promise<Types.SendMessage> {
    return Messages.sendImage.apply(this, args);
  }
  async sendSticker(
    this: Bot,
    ...args: Parameters<typeof Messages.sendSticker>
  ): Promise<Types.SendMessage> {
    return Messages.sendSticker.apply(this, args);
  }
  async sendVideo(
    this: Bot,
    ...args: Parameters<typeof Messages.sendVideo>
  ): Promise<Types.SendMessage> {
    return Messages.sendVideo.apply(this, args);
  }
  async sendVoice(
    this: Bot,
    ...args: Parameters<typeof Messages.sendVoice>
  ): Promise<Types.SendMessage> {
    return Messages.sendVoice.apply(this, args);
  }

  async sendPoll(
    this: Bot,
    ...args: Parameters<typeof Messages.sendPoll>
  ): Promise<Types.SendMessage> {
    return Messages.sendPoll.apply(this, args);
  }

  async sendLocation(
    this: Bot,
    ...args: Parameters<typeof Messages.sendLocation>
  ): Promise<Types.SendMessage> {
    return Messages.sendLocation.apply(this, args);
  }

  async sendContact(
    this: Bot,
    ...args: Parameters<typeof Messages.sendContact>
  ): Promise<Types.SendMessage> {
    return Messages.sendContact.apply(this, args);
  }

  async forwardMessage(
    this: Bot,
    ...args: Parameters<typeof Messages.forwardMessage>
  ): Promise<Types.SendMessage> {
    return Messages.forwardMessage.apply(this, args);
  }

  async editMessageText(
    this: Bot,
    ...args: Parameters<typeof Messages.editMessageText>
  ): Promise<Types.SendMessage> {
    return Messages.editMessageText.apply(this, args);
  }

  async deleteMessage(
    this: Bot,
    ...args: Parameters<typeof Messages.deleteMessage>
  ): Promise<Types.SendMessage> {
    return Messages.deleteMessage.apply(this, args);
  }

  async editMessageKeypad(
    this: Bot,
    ...args: Parameters<typeof Messages.editMessageKeypad>
  ): Promise<Types.SendMessage> {
    return Messages.editMessageKeypad.apply(this, args);
  }

  async editChatKeypad(
    this: Bot,
    ...args: Parameters<typeof Messages.editChatKeypad>
  ): Promise<Types.SendMessage> {
    return Messages.editChatKeypad.apply(this, args);
  }

  // async pinChatMessage(
  //   this: Bot,
  //   ...args: Parameters<typeof Messages.pinChatMessage>
  // ): Promise<Types.SendMessage> {
  //   return Messages.pinChatMessage.apply(this, args);
  // }

  // chat
  async getChat(
    this: Bot,
    ...args: Parameters<typeof Chat.getChat>
  ): Promise<Types.Chat> {
    return Chat.getChat.apply(this, args);
  }

  async banChatMember(
    this: Bot,
    ...args: Parameters<typeof Chat.banChatMember>
  ): Promise<any> {
    return Chat.banChatMember.apply(this, args);
  }

  async unbanChatMember(
    this: Bot,
    ...args: Parameters<typeof Chat.unbanChatMember>
  ): Promise<any> {
    return Chat.unbanChatMember.apply(this, args);
  }

  // async getChatAdministrators(
  //   this: Bot,
  //   ...args: Parameters<typeof Chat.getChatAdministrators>
  // ): Promise<Types.SendMessage> {
  //   return Chat.getChatAdministrators.apply(this, args);
  // }

  // async getChatMemberCount(
  //   this: Bot,
  //   ...args: Parameters<typeof Chat.getChatMemberCount>
  // ): Promise<Types.SendMessage> {
  //   return Chat.getChatMemberCount.apply(this, args);
  // }

  // utilities
  async start(
    this: Bot,
    ...args: Parameters<typeof Utilities.start>
  ): Promise<any> {
    return Utilities.start.apply(this, args);
  }

  async run(
    this: Bot,
    ...args: Parameters<typeof Utilities.run>
  ): Promise<any> {
    return Utilities.run.apply(this, args);
  }

  async getUpdates(
    this: Bot,
    ...args: Parameters<typeof Utilities.getUpdates>
  ): Promise<any> {
    return Utilities.getUpdates.apply(this, args);
  }

  async __setupWebhook(
    this: Bot,
    ...args: Parameters<typeof Utilities.setupWebhook>
  ): Promise<any> {
    return Utilities.setupWebhook.apply(this, args);
  }

  async __polling(
    this: Bot,
    ...args: Parameters<typeof Utilities.polling>
  ): Promise<any> {
    return Utilities.polling.apply(this, args);
  }

  // settings
  async setCommands(
    this: Bot,
    ...args: Parameters<typeof Settings.setCommands>
  ): Promise<any> {
    return Settings.setCommands.apply(this, args);
  }

  async updateBotEndpoints(
    this: Bot,
    ...args: Parameters<typeof Settings.updateBotEndpoints>
  ): Promise<any> {
    return Settings.updateBotEndpoints.apply(this, args);
  }
}
