# Echo Bot با rubika

این ربات ساده با استفاده از کتابخانه [rubika](https://hadi-rostami.github.io/rubika-docs/) ساخته شده و هدف آن بازگرداندن (echo) پیام‌های متنی کاربران است.

## پیش‌نیازها

برای اجرای این ربات به موارد زیر نیاز دارید:

- [Bun.js](https://bun.sh/)
- نصب کتابخانه `rubika`:

```bash
bun add rubika
```

## ساختار فایل

```
project/
└── index.ts.
```

## محتوای فایل index.ts

```ts
import Bot, { Filters } from "rubika";

const bot = new Bot("YOUR_BOT_TOKEN");

bot.on("update", [Filters.isText], async (ctx) => {
  await ctx.reply(ctx.new_message.text);
});

bot.run();
```

## تست ربات

برای اجرای ربات کافیست از دستور زیر استفاده کنید:

```bash
bun run index.ts
```

- ربات اکنون آماده است و هر پیام متنی‌ای که دریافت کند را بدون تغییر برمی‌گرداند.

## نکته امنیتی

فراموش نکنید که `YOUR_BOT_TOKEN` را با توکن واقعی ربات روبیکای خود جایگزین کنید. هرگز این توکن را در مخازن عمومی قرار ندهید.
