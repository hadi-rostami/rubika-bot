import Update from "../contexts/update";
import { OptionSpamType, SpamCallbackType } from "../types/utils";

export default class AntiSpam {
  private spam_time: number;
  private spam_limit: number;
  private cache = new Map<string, Map<string, number[]>>();

  constructor(
    private spamCallback: SpamCallbackType,
    options: OptionSpamType,
  ) {
    this.spam_time = options.spam_time || 5000;
    this.spam_limit = options.spam_time || 4;
  }

  checkSpam = async (ctx: Update) => {
    if (!ctx.new_message) return;

    const now = Date.now();
    const { sender_id } = ctx.new_message;
    const chatId = ctx.chat_id;

    if (!this.cache.has(chatId)) {
      this.cache.set(chatId, new Map());
    }

    const chatMap = this.cache.get(chatId)!;

    if (!chatMap.has(sender_id)) {
      chatMap.set(sender_id, []);
    }

    const timestamps = chatMap.get(sender_id)!;

    while (timestamps.length && now - timestamps[0] > this.spam_time) {
      timestamps.shift();
    }

    timestamps.push(now);

    if (timestamps.length >= this.spam_limit) {
      timestamps.length = 0;
      await this.spamCallback(ctx);
    }
  };
}
