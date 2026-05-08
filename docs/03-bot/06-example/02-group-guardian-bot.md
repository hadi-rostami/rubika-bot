---
slug: /bot/example/group-guardian
id: learn-bot-example-group-guardian
sidebar_position: 4
sidebar_label: ربات محافظ گروه
last_update:
  date: '2026-02-22'
  author: 'hadi-rostami'
---

# ربات محافظ گروه با rubika

این ربات پیام‌های گروه را بررسی کرده و در صورت تشخیص پیام حاوی لینک، آن را حذف می‌کند (کاربردی برای جلوگیری از اسپم).

## پیش‌نیازها

- [Bun.js](https://bun.sh/)
- نصب کتابخانه `rubika`:

```bash
bun add rubika
```

## محتوای فایل `index.ts`
```ts
import Bot, { Filters } from "rubika/bot";

const bot = new Bot("YOUR_BOT_TOKEN");

bot.on("update", [Filters.isGroup, Filters.isNewMessage, Filters.isLink], async (ctx) => {
  // حذف پیام اسپم
  await ctx.delete();
  // ارسال هشدار به گروه (اختیاری)
  await ctx.bot.sendMessage(ctx.chat_id,`⚠️ کاربر ${ctx.new_message?.sender_id} پیام حاوی لینک فرستاد که حذف شد.`);
});

bot.on("error", async (err) => {
  console.error("خطا:", err.message);
});

bot.run();
```


## تست ربات

برای اجرای ربات کافیست از دستور زیر استفاده کنید:

```bash
bun run index.ts
```

- ربات در گروه، هر پیام متنی که شامل لینک باشد را حذف می‌کند.

## نکته
- دقت کنید که ربات باید در گروه ادمین باشد تا بتواند پیام‌ها را حذف کند.
- می‌توانید لیست سفید (allow-list) برای کاربران خاص اضافه کنید.