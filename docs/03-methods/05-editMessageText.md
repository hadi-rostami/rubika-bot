# `editMessageText`

ویرایش متن یک پیام قبلاً ارسال شده در یک چت.

## ورودی‌ها

| نام          | نوع      | توضیح                                  |
| ------------ | -------- | -------------------------------------- |
| `chat_id`    | `string` | آیدی چتی که پیام باید در آن ویرایش شود. |
| `text`       | `string` | متن پیام                               |
| `message_id` | `string` | شناسه پیام                             |

## خروجی

- هیچ مقداری باز نمی‌گرداند. در صورت خطا، یک استثناء پرتاب می‌شود.

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/edit", async (ctx) => {
  const { message_id } = await bot.sendMessage(ctx.chat_id, "ربات استارت شد.");

  await bot.editMessageText(ctx.chat_id, "پیام ویرایش شد!", message_id);
});

bot.run();
```
