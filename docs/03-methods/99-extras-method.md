---
slug: /methods/extras-method
id: learn-bot-extras-method-method
sidebar_position: 2
sidebar_label: متد های extras

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `extras-method`

## `run`

متدی برای اجرای سریع ربات پس از آماده‌سازی اولیه و ثبت Webhook

### توضیح

این متد به صورت async اجرا می‌شود و تا زمانی که bot.initialize مقدار true نگرفته، صبر می‌کند. سپس متد setupWebhook را با پارامترهای داده شده صدا می‌زند.

### پارامترها

| نام       | نوع                                                                       | پیش‌فرض                                 | توضیح                                                     |
| --------- | ------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------- |
| `url`     | `string`                                                                  | `undefined`                             | آدرس کامل وب‌هوک (برای ثبت در سرور روبیکا)                |
| `host`    | `string`                                                                  | `undefined`                             | آدرس شبکه‌ای سرور محلی (برای استفاده در `fastify.listen`) |
| `port`    | `number`                                                                  | `3000`                                  | پورتی که سرور محلی روی آن بالا می‌آید                     |
| `updates` | [UpdateEndpointTypeEnum[]](/docs/robot/models#updateendpointtypeenum) | `[ReceiveUpdate, ReceiveInlineMessage]` | نوع به‌روزرسانی‌هایی که ربات باید دریافت کند              |

### استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.run("https://example.com", "0.0.0.0", 3000, [
  "ReceiveUpdate",
  "ReceiveInlineMessage",
]);
```

## start

متد راه‌انداز ربات برای تنظیم توکن و دریافت اطلاعات اولیه‌ی ربات از سرور.

### توضیح

این متد ابتدا بررسی می‌کند که آیا توکنی به آن داده شده یا خیر. اگر داده نشده باشد، سعی می‌کند توکن را از دیتابیس نشست (sessionDB) دریافت کند. در صورت عدم موفقیت، از کاربر توکن را درخواست می‌کند (از طریق prompt در محیط CLI). سپس اطلاعات ربات را با متد getMe دریافت کرده و مقدار this.bot را تنظیم می‌کند.

در پایان، مقدار this.initialize به true تنظیم می‌شود تا نشان دهد ربات آماده است.

### پارامترها

این متد پارامتری دریافت نمی کند.

### استفاده ( خودکار در کلاس Bot)

```js
constructor(public token: SessionType) {
	...

	this.start();
}

```
