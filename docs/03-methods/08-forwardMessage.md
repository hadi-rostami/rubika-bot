---
slug: /methods/forwardmessage
id: learn-bot-forwardmessage-method
sidebar_position: 2
sidebar_label: متد forwardMessage

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `forwardMessage`

باز ارسال کردن پیام به چت دیگر.

## ورودی‌ها

| نام                    | نوع                          | توضیح                                   |
| ---------------------- | ---------------------------- | --------------------------------------- |
| `chat_id`              | `string`                     | آیدی چتی که پیام در ان ارسال شده است.   |
| `message_id`           | `string`                     | شناسه پیام ارسال شده                    |
| `to_chat_id`           | `string`                     | آیدی چتی که پیام باید به ان فروارد شود. |
| `disable_notification` | `boolean` _(پیش‌فرض: false)_ | اگر `true` باشد، پیام بدون نوتیفیکیشن   |

## خروجی

| فیلد           | نوع    | توضیح           |
| -------------- | ------ | --------------- |
| new_message_id | string | شناسه پیام جدید |

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/forward", async (ctx) => {
  await bot.forwardMessage(
    ctx.chat_id,
    ctx.new_message.message_id,
    ctx.chat_id
  );
});

bot.run();
```
