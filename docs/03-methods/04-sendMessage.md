---
slug: /methods/sendmessage
id: learn-bot-sendmessage-method
sidebar_position: 2
sidebar_label: متد sendMessage

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `sendMessage`

ارسال پیام با استفاده از ربات به یک کاربر، گروه یا کانال.

## ورودی‌ها

| نام                    | نوع                                                                     | توضیح                                               |
| ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| `chat_id`              | `string`                                                                | آیدی چتی که پیام باید به آن ارسال شود.              |
| `text`                 | `string`                                                                | متن پیام                                            |
| `chat_keypad`          | [Keypad](/docs/robot/models#keypad) _(اختیاری)_                         | کیبورد معمولی (Reply Keyboard) برای پیام.           |
| `inline_keypad`        | [InlineKeypad](/docs/robot/models#inlinekeypad) _(اختیاری)_             | کیبورد اینلاین همراه پیام.                          |
| `disable_notification` | `boolean` _(پیش‌فرض: false)_                                            | اگر `true` باشد، پیام بدون نوتیفیکیشن ارسال می‌شود. |
| `reply_to_message_id`  | `string` _(اختیاری)_                                                    | در صورت تعیین، پیام به این پیام پاسخ داده می‌شود.   |
| `chat_keypad_type`     | [ChatKeypadTypeEnum](/docs/robot/models#chatkeypadtypeenum) _(اختیاری)_ | نوع کیبورد برای ساخت یا تنظیم کیبورد چت.            |

## خروجی

| فیلد       | نوع    | توضیح     |
| ---------- | ------ | --------- |
| message_id | string | ایدی پیام |

## مثال‌ها

### 1. ارسال پیام ساده متنی

```ts
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/start", async (ctx) => {
  await bot.sendMessage(ctx.chat_id, "ربات استارت شد.");
});

bot.run();
```

---

### 2. ارسال پیام با کیبورد Reply (chat_keypad)

```ts
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/start", async (ctx) => {
  await bot.sendMessage(ctx.chat_id, "ربات استارت شد.", {
    rows: [
      {
        buttons: [
          { button_text: "درباره", id: "100", type: "Simple" },
          { button_text: "اطلاعات", id: "101", type: "Simple" },
        ],
      },
    ],
    on_time_keyboard: false,
    resize_keyboard: true,
  });
});

bot.run();
```

### 3. ارسال پیام با کیبورد اینلاین (inline_keypad)

```ts
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/start", async (ctx) => {
  await bot.sendMessage(ctx.chat_id, "ربات استارت شد.", undefined, {
    rows: [
      {
        buttons: [
          { button_text: "درباره", id: "100", type: "Simple" },
          { button_text: "اطلاعات", id: "101", type: "Simple" },
        ],
      },
    ],
  });
});

bot.run();
```

### 4. ارسال پیام بدون نوتیفیکیشن

```ts
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/start", async (ctx) => {
  await bot.sendMessage(
    ctx.chat_id,
    "ربات استارت شد.",
    undefined,
    undefined,
    false,
  );
});

bot.run();
```

### 5. ارسال پیام در پاسخ به یک پیام دیگر

```ts
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/start", async (ctx) => {
  await bot.sendMessage(
    ctx.chat_id,
    "ربات استارت شد.",
    undefined,
    undefined,
    true,
    ctx.new_message.message_id,
  );
});

bot.run();
```
