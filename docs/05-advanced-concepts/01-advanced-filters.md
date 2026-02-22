---
slug: /advanced-concepts/advanced-filters
id: learn-bot-advanced-concepts-advanced-filters
sidebar_position: 2
sidebar_label: فیلترهای پیشرفته

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---


# فیلترهای پیشرفته

در rubika می‌توانید با استفاده از فیلترهای ترکیبی، شرطی، ذخیره‌سازی موقت، و فیلترهای سفارشی، رفتار ربات را بسیار منعطف و قدرتمند تعریف کنید.

## 1. فیلترهای ترکیبی and و or

### and

```js
import Bot, { Filters } from "rubika";

const bot = new Bot("YOUR_TOKEN");

const filters = [BotFilters.isText, BotFilters.isForward];

bot.on("update", filters, async (ctx) => {
  console.log(ctx);
});

bot.run();
```

### or

```js
import Bot, { Filters } from "rubika";

const bot = new Bot("YOUR_TOKEN");
// استفاده از یک ارایه دیگر درون filters
const filters = [[BotFilters.isText, BotFilters.isForward]];

bot.on("update", filters, async (ctx) => {
  console.log(ctx);
});

bot.run();
```

### ترکیبی

```js
import Bot, { Filters } from "rubika";

const bot = new Bot("YOUR_TOKEN");

const filters = [BotFilters.isText, [BotFilters.isReply, BotFilters.isForward]];

bot.on("update", filters, async (ctx) => {
  console.log(ctx);
});

bot.run();
```

## 2. ساخت فیلتر سفارشی (Custom Filter)

توانید فیلتر دلخواه خود را بسازید. فیلترها تابع‌هایی هستند که یک context را گرفته و true یا false برمی‌گردانند.

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

const isAdmin = (ctx) => {
  const adminIds = ["123", "456"];
  return adminIds.includes(ctx.new_message?.sender_id);
};

bot.on("update", isAdmin, async (ctx) => {
  await ctx.reply("شما ادمین هستید!");
});

bot.run();
```

## 3. استفاده از ctx.store در فیلترها

می‌توانید داده‌هایی را بین فیلترها و هندلر منتقل کنید:

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

const isAdmin = (ctx) => {
  ctx.store.isAdmin = adminIds.includes(ctx.new_message?.sender_id);
  return true;
};

bot.on("update", isAdmin, async (ctx) => {
  if (ctx.store.isAdmin) await ctx.reply("شما ادمین هستید!");
});

bot.run();
```
