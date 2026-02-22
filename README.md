<p align="center">
  <h1 style="color:#fff;">› rubika Framework</h1>
  <p><b>فریم‌ورک قدرتمند و پرسرعت جاوااسکریپت برای ربات‌/سلف‌های روبیکا</b></p>
</p>

---

## › معرفی rubika

**rubika** یک فریم‌ورک سبک، مدرن و کاملاً **غیرهمزمان** برای توسعه ربات‌های روبیکا است.  
با معماری **Filter-Base** و **Type-Safe**، شما می‌توانید:

- ربات‌/سلف‌ هایی سریع و کم‌حجم بسازید.
- سیستم فرمان‌دهی و مدیریت پیام حرفه‌ای داشته باشید.
- با قابلیت **اسکِیبل و قابل گسترش**، پروژه‌های بزرگ هم مدیریت کنید.

---

## › نصب و شروع سریع

```bash
bun add rubika
```

## › نمونه کد ساده ربات

```ts
import Bot, { Filters } from "rubika/bot";

const bot = new Bot("TOKEN_BOT");

bot.command("/start", async (ctx) => {
  await ctx.reply("🤖 ربات استارت شد");
});

bot.on("update", [Filters.isText], async (ctx) => {
  await ctx.reply("سلام 😎");
});

bot.on("error", async (err) => {
  await err.bot.sendMessage("CHAT_ID", err.message);
  console.log(err.message);
});

bot.run();
```
## › نمونه کد ساده سلف (self)

```ts
import Client, { Filters } from "rubika/client";


const client = new Client("rubika");

client.command("/start", async (ctx) => {
  await ctx.reply("🤖 ربات استارت شد");
});

client.on("message", [Filters.isText], async (ctx) => {
  await ctx.reply("سلام 😎");
});

client.on("activities", async (ctx) => {
  console.log(ctx);
});

client.on("chat", async (ctx) => {
  console.log(ctx);
});

client.on("notifications", async (ctx) => {
  console.log(ctx);
});

client.on("error", async (err) => {
  await err.client.sendMessage("CHAT_ID", err.message);
  console.log(err.message);
});

client.run();
```

## › ویژگی‌های کلیدی

| ویژگی          | توضیح                                          |
| -------------- | ---------------------------------------------- |
| ⚡ Super-Speed | استفاده از معماری غیرهمزمان برای پاسخ‌دهی سریع |
| 🛡️ Type-Safe   | کمک به جلوگیری از خطاهای متداول جاوااسکریپت    |
| 🔧 Filter-Base | سیستم فیلترینگ قدرتمند برای مدیریت پیام‌ها     |
| 📂 Modular     | ساختار ماژولار و قابل گسترش                    |

## 🌐 لینک‌های مهم

- [لینک گیتهاب](https://github.com/hadi-rostami/rubika-bot)
- [لینک npm](https://www.npmjs.com/package/rubika)
- [تلگرام](https://t.me/rubikajs_channel)
- [روبیکا](https://rubika.ir/rubika_js)
