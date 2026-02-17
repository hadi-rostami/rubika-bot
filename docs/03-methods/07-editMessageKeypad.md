# `editMessageKeypad`

ویرایش `chat_keypad` قبلاً ارسال شده در یک چت.

## ورودی‌ها

| نام             | نوع                                             | توضیح                                                       |
| --------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| `chat_id`       | `string`                                        | آیدی چتی که پیام باید در آن ویرایش شود.                      |
| `message_id`    | `string`                                        | شناسه پیام ارسال شده                                        |
| `inline_keypad` | [InlineKeypad](/docs/robot/models#inlinekeypad) | ساختار جدید `keypad` که باید به پیام اضافه یا جایگزین شوند. |

## خروجی

- هیچ مقداری باز نمی‌گرداند. در صورت خطا، یک استثناء پرتاب می‌شود.

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/edit", async (ctx) => {
  const { message_id } = await bot.sendMessage(ctx.chat_id, "ربات استارت شد.", {
    rows: [
      {
        buttons: [
          { button_text: "درباره", id: "100", type: "Simple" },
          { button_text: "اطلاعات", id: "101", type: "Simple" },
        ],
      },
    ],
  });

  await bot.editMessageKeypad(ctx.chat_id, message_id, {
    rows: [
      {
        buttons: [
          { button_text: "درباره", id: "100", type: "Simple" },
          { button_text: "اطلاعات", id: "101", type: "Simple" },
          { button_text: "تنظیمات", id: "102", type: "Simple" },
        ],
      },
    ],
  });
});

bot.run();
```
