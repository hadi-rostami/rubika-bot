---
slug: /methods/banchatmember
id: learn-bot-banchatmember-method
sidebar_position: 2
sidebar_label: متد banChatMember

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `banChatMember`

استفاده از متد `banChatMember` برای مسدود کردن کاربر از گروه یا کانال

## ورودی ها

| نام       | نوع      | توضیح                                   |
| --------- | -------- | --------------------------------------- |
| `chat_id` | `string` | شناسه چتی که باید کاربر در ان مسدود شود |
| `user_id` | `string` | شناسه کاربری که باید مسدود شود          |

## خروجی

- ندارد

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/ban", async (ctx) => {
  await bot.banChatMember(ctx.chat_id , sender_id);
});

bot.run();
```
