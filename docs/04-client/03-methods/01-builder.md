---
slug: /client/methods/builder
id: learn-client-builder-method
sidebar_position: 2
sidebar_label: متد builder

last_update:
  date: '2026-02-23'
  author: 'hadi-rostami'
---

# `builder`

تابع `builder` یک متد داخلی در کلاس `Client` است که وظیفه‌ی ارسال درخواست‌های سطح پایین به API را بر عهده دارد. این تابع به طور مستقیم توسط کاربران کتابخانه استفاده نمی‌شود، بلکه زیرساخت متدهای دیگر کلاس `Client` را تشکیل می‌دهد.

## پارامترها

| نام      | نوع      | توضیح                                              |
| -------- | -------- | -------------------------------------------------- |
| `method` | `string` | نام متد API که باید فراخوانی شود.                  |
| `input`  | `object` | پارامترهای مورد نیاز برای ارسال به سرور. (اختیاری) |

---

## خروجی

- خروجی هر متد با دیگر متد ها فرق دارد!

## ❗ خطاها

- اگر سشن وجود نداشته باشد.
- اگر پارامتر ها اشتباه باشند.

---

## نمونه استفاده (غیر مستقیم)

- این تابع معمولاً توسط سایر متدهای کلاس `Client` مانند زیر فراخوانی می‌شود:

```js
import Client from "rubika";

const client = new Client("session-name");

client.command("/info", async (ctx) => {
  const clientInfo = await client.builder("getUserInfo", {});

  console.log(clientInfo);

  await ctx.reply(JSON.stringify(clientInfo));
});

client.run();
```


## نکات
- استفاده‌ی مستقیم از builder پیشنهاد نمی‌شود.
- خطاهای تولیدشده ساختاریافته بوده و برای دیباگ بسیار مفیدند.