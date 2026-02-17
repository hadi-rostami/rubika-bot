# `editChatKeypad`

ویرایش `chat_keypad` قبلاً ارسال شده در یک چت.

## ورودی‌ها

| نام                | نوع                                                                          | توضیح                                                              |
| ------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `chat_id`          | `string`                                                                     | آیدی چتی که پیام باید در آن ویرایش شود.                             |
| `chat_keypad`      | [Keypad](/docs/robot/models#keypad)                                          | ساختار جدید کلیدها (کیبورد) که باید به پیام اضافه یا جایگزین شوند. |
| `chat_keypad_type` | [ChatKeypadTypeEnum](/docs/robot/models#chatkeypadtypeenum) _(پیش‌فرض: New)_ | نوع نحوه اعمال کیبورد (New، None, Remove ).                        |

## خروجی

- هیچ مقداری باز نمی‌گرداند. در صورت خطا، یک استثناء پرتاب می‌شود.

---

## نحوه استفاده

### برای ادیت chat_keypad

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/edit", async (ctx) => {
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

  await bot.editChatKeypad(ctx.chat_id, {
    rows: [
      {
        buttons: [
          { button_text: "درباره", id: "100", type: "Simple" },
          { button_text: "اطلاعات", id: "101", type: "Simple" },
          { button_text: "تنظیمات", id: "102", type: "Simple" },
        ],
      },
    ],
    on_time_keyboard: false,
    resize_keyboard: true,
  });
});

bot.run();
```

### برای حذف chat_keypad

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/delete", async (ctx) => {
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

  await bot.editChatKeypad(
    ctx.chat_id,
    {
      rows: [],
    },
    "Remove"
  );
});

bot.run();
```
