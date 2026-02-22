---
slug: /methods/sendmusic
id: learn-bot-sendmusic-method
sidebar_position: 2
sidebar_label: متد sendMusic

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `sendMusic`

ارسال موزیک با ربات

## ورودی‌ها

| نام                    | نوع                                                                     | توضیح                                               |
| ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| `chat_id`              | `string`                                                                | آیدی چتی که پیام باید به آن ارسال شود.              |
| `path_file`            | `string`                                                                | ادرس موزیک                                            |
| `text`                 | `string` _(اختیاری)_                                                    | متن پیام                                            |
| `chat_keypad`          | [Keypad](/docs/robot/models#keypad) _(اختیاری)_                         | کیبورد معمولی (Reply Keyboard) برای پیام.           |
| `inline_keypad`        | [InlineKeypad](/docs/robot/models#inlinekeypad) _(اختیاری)_             | کیبورد اینلاین همراه پیام.                          |
| `disable_notification` | `boolean` _(پیش‌فرض: false)_                                            | اگر `true` باشد، پیام بدون نوتیفیکیشن ارسال می‌شود. |
| `reply_to_message_id`  | `string` _(اختیاری)_                                                    | در صورت تعیین، پیام به این پیام پاسخ داده می‌شود.   |
| `chat_keypad_type`     | [ChatKeypadTypeEnum](/docs/robot/models#chatkeypadtypeenum) _(اختیاری)_ | نوع کیبورد برای ساخت یا تنظیم کیبورد چت.            |

## خروجی

| فیلد       | نوع    | توضیح     |
| ---------- | ------ | --------- |
| message_id | string | ایدی پیام |

## نحوه استفاده

```ts
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/music", async (ctx) => {
  await bot.sendMusic(ctx.chat_id, "/path/to/your/file");
});

bot.run();
```

---