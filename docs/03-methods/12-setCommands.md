# `setCommands`

افزودن دستور به ربات.

## ورودی‌ها

| نام        | نوع                                     | توضیح                                  |
| ---------- | --------------------------------------- | -------------------------------------- |
| `chat_id`  | `string`                                | آیدی چتی که پیام باید به آن ارسال شود. |
| `commands` | [Commend[]](/docs/robot/models#commend) | لیست دستورات                           |

## خروجی

- هیچ مقداری باز نمی‌گرداند. در صورت خطا، یک استثناء پرتاب می‌شود.

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/command", async (ctx) => {
  await bot.setCommands(ctx.chat_id, [
    {
      command: "command1",
      description: "description1",
    },
    {
      command: "command2",
      description: "description2",
    },
  ]);
});

bot.run();
```
