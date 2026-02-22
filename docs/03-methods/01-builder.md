---
slug: /methods/builder
id: learn-bot-builder-method
sidebar_position: 2
sidebar_label: متد builder

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `builder`

تابع `builder` یک متد داخلی در کلاس `Bot` است که وظیفه‌ی ارسال درخواست‌های سطح پایین به API را بر عهده دارد. این تابع به طور مستقیم توسط کاربران کتابخانه استفاده نمی‌شود، بلکه زیرساخت متدهای دیگر کلاس `Bot` را تشکیل می‌دهد.

## پارامترها

| نام      | نوع      | توضیح                                              |
| -------- | -------- | -------------------------------------------------- |
| `method` | `string` | نام متد API که باید فراخوانی شود.                  |
| `input`  | `object` | پارامترهای مورد نیاز برای ارسال به سرور. (اختیاری) |

---

## خروجی

- خروجی هر متد با دیگر متد ها فرق دارد!

## ❗ خطاها

- اگر توکن ارسال نشده باشد.
- اگر پارامتر ها اشتباه باشند.

---

## نمونه استفاده (غیر مستقیم)

- این تابع معمولاً توسط سایر متدهای کلاس `Bot` مانند زیر فراخوانی می‌شود:

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/info", async (ctx) => {
  const botInfo = await bot.builder("getMe", {});

  console.log(botInfo);

  await ctx.reply(JSON.stringify(botInfo));
});

bot.run();
```


## نکات
- استفاده‌ی مستقیم از builder پیشنهاد نمی‌شود.
- خطاهای تولیدشده ساختاریافته بوده و برای دیباگ بسیار مفیدند.