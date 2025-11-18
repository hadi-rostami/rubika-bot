<p align="center">
  <h1 style="color:#fff;">› rubika Framework</h1>
  <p><b>فریم‌ورک قدرتمند و پرسرعت جاوااسکریپت برای ربات‌های روبیکا</b></p>
</p>

---

## › معرفی rubika

**rubika** یک فریم‌ورک سبک، مدرن و کاملاً **غیرهمزمان** برای توسعه ربات‌های روبیکا است.  
با معماری **Filter-Base** و **Type-Safe**، شما می‌توانید:

- ربات‌هایی سریع و کم‌حجم بسازید
- سیستم فرمان‌دهی و مدیریت پیام حرفه‌ای داشته باشید
- با قابلیت **اسکِیبل و قابل گسترش**، پروژه‌های بزرگ هم مدیریت کنید

---

## › نصب و شروع سریع

```bash
bun add rubika
```

## › نمونه کد ساده

```js
const { Bot, Filters } = require("rubika");

const bot = new Bot("rubika");

bot.command("/start", async (ctx, bot) => {
  await bot.sendMessage(ctx.chat_id, "🤖 ربات استارت شد");
});

bot.on("message", [Filters.isText], async (ctx, bot) => {
  await bot.sendMessage(ctx.chat_id, "سلام 😎");
});

bot.run();
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
