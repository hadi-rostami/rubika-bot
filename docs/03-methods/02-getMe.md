# `getMe`

استفاده از متد `getMe` برای دریافت اطلاعات مرتبط با ربات.

## ورودی ها

این تابع ورودی دریافت نمی‌کند.

## خروجی

| فیلد | نوع | توضیح        |
| ---- | --- | ------------ |
| bot  | [Bot](/docs/robot/models#bot) | اطلاعات ربات |

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/info", async (ctx) => {
  const botInfo = await bot.getMe();

  console.log(botInfo);

  await ctx.reply(JSON.stringify(botInfo));
});

bot.run();
```
