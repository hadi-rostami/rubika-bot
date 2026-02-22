---
slug: /methods/sendcontact
id: learn-bot-sendcontact-method
sidebar_position: 2
sidebar_label: متد sendContact

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `sendContact`

ارسال مخاطب با ربات.

## ورودی‌ها

| نام                    | نوع                                                                     | توضیح                                               |
| ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| `chat_id`              | `string`                                                                | آیدی چتی که پیام باید به آن ارسال شود.              |
| `first_name`           | `string`                                                                | اسم کوچک                                            |
| `last_name`            | `string`                                                                | نام خانوادگی                                        |
| `phone_number`         | `string`                                                                | شماره تلفن                                          |
| `chat_keypad`          | [Keypad](/docs/robot/models#keypad) _(اختیاری)_                         | کیبورد معمولی (Reply Keyboard) برای پیام.           |
| `inline_keypad`        | [InlineKeypad](/docs/robot/models#inlinekeypad) _(اختیاری)_             | کیبورد اینلاین همراه پیام.                          |
| `disable_notification` | `boolean` _(پیش‌فرض: false)_                                            | اگر `true` باشد، پیام بدون نوتیفیکیشن ارسال می‌شود. |
| `reply_to_message_id`  | `string` _(اختیاری)_                                                    | در صورت تعیین، پیام به این پیام پاسخ داده می‌شود.   |
| `chat_keypad_type`     | [ChatKeypadTypeEnum](/docs/robot/models#chatkeypadtypeenum) _(اختیاری)_ | نوع کیبورد برای ساخت یا تنظیم کیبورد چت.            |

## خروجی

| فیلد       | نوع    | توضیح      |
| ---------- | ------ | ---------- |
| message_id | string | شناسه پیام |

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/contact", async (ctx) => {
  await bot.sendContact(ctx.chat_id, "rubika", "phone", "+989123456789");
});

bot.run();
```
