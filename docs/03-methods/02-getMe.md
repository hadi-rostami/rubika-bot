---
slug: /methods/getme
id: learn-bot-getme-method
sidebar_position: 2
sidebar_label: متد getMe

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `getMe`

استفاده از متد `getMe` برای دریافت اطلاعات مرتبط با ربات.

## ورودی ها

این تابع ورودی دریافت نمی‌کند.

## خروجی

| فیلد | نوع | توضیح        |
| ---- | --- | ------------ |
| bot  | [Bot](/docs/robot/models#bot) | اطلاعات ربات |

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/info", async (ctx) => {
  const botInfo = await bot.getMe();

  console.log(botInfo);

  await ctx.reply(JSON.stringify(botInfo));
});

bot.run();
```
