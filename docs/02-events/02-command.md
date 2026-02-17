# command

متدی برای ثبت هندلرهای کامند (دستورات متنی) با پشتیبانی از فیلتر.

---

### توضیح

متد `command` برای گوش دادن به پیام‌هایی که با یک پیش‌وند مشخص (مانند `/start` یا الگوی RegExp) شروع می‌شوند استفاده می‌شود. این متد امکان تعریف فیلتر برای محدود کردن اجرای هندلر را هم دارد.

---

### ورودی‌ها

| نام       | نوع                                               | توضیح                                               |
| --------- | ------------------------------------------------- | --------------------------------------------------- |
| `prefix`  | `string \| RegExp`                                | پیش‌وند متن پیام یا الگوی RegExp برای شناسایی کامند |
| `filters` | `NestedFilter<ContextMap['message']>` _(اختیاری)_ | آرایه‌ای از فیلترها برای محدود کردن اجرای هندلر     |
| `handler` | `(ctx: Message) => Promise<void>`                 | تابعی که هنگام دریافت کامند اجرا می‌شود             |

---

## مثال‌ها

### استفاده ساده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/start", async (ctx) => {
  await ctx.reply("ربات شروع به کار کرد!");
});

bot.run();
```

### استفاده با فیلتر

```js
import Bot, { Filters } from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command(/\/echo (.+)/, [Filters.isText], async (ctx) => {
  const text = ctx.text.match(/\/echo (.+)/)[1];
  await ctx.reply(`پیام شما: ${text}`);
});

bot.run();
```
