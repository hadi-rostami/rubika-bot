# `sendPoll`

ارسال نظرسنجی با ربات.

## ورودی‌ها

| نام        | نوع        | توضیح                                  |
| ---------- | ---------- | -------------------------------------- |
| `chat_id`  | `string`   | آیدی چتی که پیام باید به آن ارسال شود. |
| `question` | `string`   | متن سوال                               |
| `options`  | `string[]` | لیست پاسخ ها                           |

## خروجی

| فیلد       | نوع    | توضیح      |
| ---------- | ------ | ---------- |
| message_id | string | شناسه پیام |

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/poll", async (ctx) => {
  await bot.sendPoll(ctx.chat_id, "2 + 3 = ",  ["1", "3", "5", "2"]);
});

bot.run();
```
