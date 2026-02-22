---
slug: /methods/unbanchatmember
id: learn-bot-unbanchatmember-method
sidebar_position: 2
sidebar_label: متد unbanChatMember

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `unbanChatMember`

استفاده از متد `unbanChatMember` برای حذف مسدود کردن کاربر از گروه یا کانال

## ورودی ها

| نام       | نوع      | توضیح                                       |
| --------- | -------- | ------------------------------------------- |
| `chat_id` | `string` | شناسه چتی که باید کاربر در ان حذف مسدود شود |
| `user_id` | `string` | شناسه کاربری که باید حذف مسدود شود          |

## خروجی

- ندارد

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/unban", async (ctx) => {
  await bot.unbanChatMember(ctx.chat_id, sender_id);
});

bot.run();
```
