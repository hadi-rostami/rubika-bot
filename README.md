<div align="center">
<h1>🚀 Rubika Framework</h1>

کتابخونه قدرتمند، مدرن و پرسرعت تایپ‌اسکریپت برای ربات/سلف‌های روبیکا و شاد

[![npm version](https://img.shields.io/npm/v/rubika.svg?style=flat-square)](https://www.npmjs.com/package/rubika)
[![license](https://img.shields.io/npm/l/rubika.svg?style=flat-square)](https://github.com/hadi-rostami/rubika-bot/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dm/rubika.svg?style=flat-square)](https://www.npmjs.com/package/rubika)
[![GitHub stars](https://img.shields.io/github/stars/hadi-rostami/rubika-bot?style=flat-square)](https://github.com/hadi-rostami/rubika-bot/stargazers)

</div>

## 📖 معرفی rubika

`Rubika` یک کتابخونه متن‌باز (Open-Source)، سبک و کاملاً غیرهمزمان (Asynchronous) مبتنی بر Bun است که برای ساخت ربات‌ها و سلف‌بات‌های پیام‌رسان‌های روبیکا و شاد توسعه یافته است. این کتابخونه با معماری Filter-Base و Type-Safe، هسته‌ای قدرتمند برای مدیریت پیام‌ها، فرمان‌ها و رویدادها فراهم می‌کند و به توسعه‌دهندگان امکان می‌دهد اپلیکیشن‌های مقیاس‌پذیر (Scalable) و با قابلیت نگهداری بالا (Maintainable) بسازند.

---

## ✨ ویژگی‌های کلیدی

| دسته‌بندی     | ویژگی               | شرح                                                                                     |
| :------------ | :------------------ | :-------------------------------------------------------------------------------------- |
| **عملکرد**    | Super-Speed         | معماری غیرهمزمان (Async/Await) مبتنی بر Bun برای پاسخ‌دهی سریع و مصرف حافظه کم          |
| **امنیت**     | Type-Safe           | پشتیبانی کامل از TypeScript و JSDoc برای جلوگیری از خطاهای رایج و بهبود تجربه توسعه     |
| **فیلترینگ**  | Filter-Base         | سیستم فیلترینگ چندلایه و قابل ترکیب (Composable) برای مدیریت دقیق و انعطاف‌پذیر پیام‌ها |
| **معماری**    | Modular             | ساختار ماژولار، سیستم پلاگین (Plugin System) و قابلیت گسترش بی‌نهایت                    |
| **چندسکویی**  | Multi-Application   | پشتیبانی هم‌زمان از پیام‌رسان‌های روبیکا و شاد با یک کدبیس واحد                         |
| **فرمان‌ها**  | Command System      | سیستم مسیریابی فرمان (Command Routing) قدرتمند با پشتیبانی از الگوهای داینامیک          |
| **ابزارها**   | Built-in Utils      | ابزارهای داخلی غنی مانند Bold(), Italic(), Code() و غیره برای فرمت‌بندی متن             |
| **دیپلویمنت** | Flexible Deployment | قابلیت اجرا در کنار وب‌سرور، Serverless و Docker                                        |

## 🏗️ معماری فیلتر پیام‌ها

Rubika از معماری Filter-Pipeline بهره می‌برد که در آن هر پیام ورودی از زنجیره‌ای از فیلترها عبور می‌کند. این رویکرد امکان پردازش مرحله‌ای و مقیاس‌پذیر پیام‌ها را فراهم می‌آورد:

```ts
bot.on(
  "message",
  [
    Filters.isText, // فیلتر ۱: فقط پیام‌های متنی
    Filters.isGroup, // فیلتر ۲: فقط گروه‌ها
  ],
  async (ctx) => {
    await ctx.reply("پیام شما در گروه دریافت شد.");
  },
);
```

- نکته: برای دیدن مثال های بیشتر از فیلتر پیام ها در rubika میتوانید داکیومنت [فیلترهای پیشرفته](https://docs.hr-dev.ir/docs/bot/advanced-concepts/advanced-filters) را مطالعه نمایید.

## 📦 نصب و راه‌اندازی سریع

```bash
# use bunjs
bun add rubika

# or with npm
npm install rubika
```

## پیش‌نیازها

- رانتایم Bun نسخه ۱.۰ یا بالاتر (یا Node.js نسخه ۱۸+)
- توکن/اکانت ربات از روبیکا یا اکانت شاد

## راهنمای ربات (Bot)

ربات‌ها با استفاده از کلاس Bot ایجاد می‌شوند و از طریق وب‌هوک یا Polling با سرور ارتباط برقرار می‌کنند.

### مثال پایه

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

// use poling
bot.run();

// or use webhook
bot.run(WEBHOOK_URL, HOST, PORT);
```

## کار با Context

هر هندلر یک شیء Context دریافت می‌کند که شامل تمام اطلاعات پیام، فرستنده و متدهای پاسخ است:

```ts
import { Bot, Utils, ButtonTypeEnum } from "rubika/bot";

const bot = new Bot("TOKEN_BOT");

bot.on("update", async (ctx) => {
  // اطلاعات پیام
  console.log(ctx.chat_id, ctx.type, ctx);

  // اطلاعات فرستنده (در صورت پیام جدید)
  if (ctx.new_message)
    console.log(ctx.new_message.sender_id, ctx.new_message.sender_type);

  // اطلاعات فرستنده (در صورت پیام ویراش)
  if (ctx.updated_message)
    console.log(ctx.updated_message.sender_id, ctx.updated_message.sender_type);

  // نوع چت
  // use "u0" --> User, "g0" --> Group, "c0" --> Channel
  if (ctx.chat_id.startsWith("g0")) {
    /* Your Codes */
  }

  // پاسخ‌دهی

  const keypad = {
    rows: [
      {
        buttons: [
          {
            button_text: "ljkl",
            id: "simple",
            type: ButtonTypeEnum.Simple,
          },
        ],
      },
    ],
  };

  await ctx.reply("پاسخ ساده");
  await ctx.reply("پاسخ با CHAT_KEYPAD", {
    ...keypad,
    on_time_keyboard: false,
    resize_keyboard: true,
  });
  await ctx.reply("پاسخ با INLINE_KEYPAD", undefined, keypad);
  await ctx.replyImage("path/to/file", "پاسخ با تصویر");

  // حذف پیام
  await ctx.delete(); // `messae_id` اختیاری

  // فرمت‌بندی
  await ctx.reply(Utils.Bold("متن بولد"));
  await ctx.reply(Utils.Italic("متن ایتالیک"));
});
```

- نکته: برای دریافت اطلاعات بیشتر درباره ایونت ها و ریزالت و نوع Context های دریافتی میتوانید این دو صفحه از داکیومنت ( [bot.on](https://docs.hr-dev.ir/docs/bot/events/on) , [bot.command](https://docs.hr-dev.ir/docs/bot/events/command) ) را مشاهده نمایید .

## راهنمای سلف (Self)

```ts
import Client from "rubika/client";

const shad_client = new Client("shad", "Shad");
const rubika_client = new Client("rubika", "Rubika");

// Shad
shad_client.on("message", async (ctx) => console.log(ctx));
shad_client.on("error", async (err) => console.log(err));

// Rubika
rubika_client.on("message", async (ctx) => console.log(ctx));
rubika_client.on("error", async (err) => console.log(err));

// start (self)-bots
shad_client.run();
rubika_client.run();
```

## سیستم فرمان‌ها (Command System)

سیستم فرمان‌دهی Rubika از الگوهای استاتیک و داینامیک پشتیبانی می‌کند:

```ts
import { Bot, Filters } from "rubika/bot";

const bot = new Bot("TOKEN_BOT");

// normal command
bot.command("/start", async (ctx) => {
  await ctx.reply("به ربات خوش آمدید!");
});

// command with regex
bot.command(
  /^\/sum_(?<a>\d+)_(?<b>\d+)$/,
  [Filters.isNewMessage],
  async (ctx) => {
    // use find key
    const text = Filters.findKey(ctx, "text");

    const [a, b] = text.split("_").slice(1);
    await ctx.reply(`${a} + ${b} = ${Number(a) + Number(b)}`);
  },
);
```

## فیلترهای سفارشی

می توانید فیلتر دلخواه خود را بسازید. فیلترها تابع‌هایی هستند که یک context را گرفته و true یا false برمی‌گردانند.
```ts
import Bot, { Filters } from "rubika/bot";

const bot = new Bot("YOUR_TOKEN");

const isAdmin = (ctx) => {
  const adminIds = ["123", "456"];
  return adminIds.includes(ctx.new_message?.sender_id);
};

bot.on("update", [Filters.isNewMessage, isAdmin], async (ctx) => {
  await ctx.reply("شما ادمین هستید!");
});

bot.run();
```

### استفاده از ctx.store در فیلترها

می‌توانید داده‌هایی را بین فیلترها و هندلر منتقل کنید:

```ts
import Bot, { Contexts, Filters } from "rubika/bot";

const bot = new Bot("YOUR_TOKEN");
const adminIds = ["admin_id"];

type StoreType = {
  isAdmin: boolean;
};

const isAdmin = (ctx: Contexts.Update<StoreType>) => {
  if (ctx?.new_message)
    ctx.store.isAdmin = adminIds.includes(ctx.new_message?.sender_id);
  return true;
};

bot.on<StoreType, "update">("update", [Filters.isNewMessage, isAdmin], async (ctx) => {
  if (ctx.store.isAdmin) await ctx.reply("شما ادمین هستید!");
});

bot.run();
```
## 🌐 مقایسه با سایر کتابخانه‌های روبیکا (بر اساس مستندات موجود)

> **نکته:** این جدول صرفاً برای آشنایی با تفاوت‌های کلی طراحی شده و ممکن است برخی کتابخانه‌ها در نسخه‌های جدیدتر ویژگی‌هایی را اضافه کرده باشند. به همه پروژه‌های متن‌باز احترام می‌گذاریم.

| ویژگی | Rubika | RubJS | rubika-bot-x | jsrubi | Rubibot |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **پلتفرم هدف** | روبیکا + شاد | روبیکا | روبیکا | روبیکا | روبیکا |
| **معماری اصلی** | Filter-Pipeline | Filter-Base | Command-Handler | Callback-Based | Event-Driven |
| **پشتیبانی از TypeScript** | ✅ کامل (بومی + JSDoc) | ✅ کامل | ❌ ندارد | ❌ ندارد | ❌ ندارد |
| **کار با چند پیام‌رسان** | ✅ (روبیکا و شاد) | ❌ فقط روبیکا | ❌ | ❌ | ❌ |
| **سیستم فرمان (Command Router)** | ✅ پیشرفته (Regex, Params) | ✅ پیشرفته | ✅ ساده | ❌ دستی | ❌ |
| **فیلترهای پیام** | ✅ چندلایه و ترکیبی | ✅ دارد | ❌ ندارد | ⚠️ محدود | ❌ ندارد |
| **Context پیشرفته** | ✅ (reply, edit, delete, utils) | ✅ دارد | ✅ پایه | ❌ | ❌ |
| **فرمت‌کننده داخلی متن** | ✅ (bold, italic, code و ...) | ✅ دارد | ❌ ندارد | ❌ | ❌ |
| **مدیریت خطا (Error Handling)** | ✅ سراسری (Catch) | ⚠️ وجود دارد | ⚠️ محدود | ❌ ندارد | ❌ |
| **پشتیبانی از Webhook** | ✅ دارد | ✅ دارد | ❌ ندارد | ❌ ندارد | ❌ |
| **سیستم پلاگین** | ❌ (در برنامه) | ✅ دارد | ❌ ندارد | ❌ ندارد | ❌ |
| **آخرین بروزرسانی** | فعال (2026) | فعال (2025) | غیرفعال (2024) | غیرفعال (2024) | متوقف (2023) |
| **مستندات فارسی** | ✅ کامل + مثال | ✅ پایه | ⚠️ انگلیسی | ⚠️ ناقص | ❌ ندارد |

# 📚 مستندات و منابع

| منبع | لینک |
| :--- | :--- |
| 📦 npm | [npmjs.com/package/rubika](https://npmjs.com/package/rubika) |
| 💻 گیت‌هاب | [github.com/hadi-rostami/rubika-bot](https://github.com/hadi-rostami/rubika-bot) |
| 📢 کانال تلگرام | [t.me/rubikats_channel](https://t.me/rubikats_channel) |
| 💬 کانال روبیکا | [rubika.ir/rubika_ts](https://rubika.ir/rubika_ts) |
| 📖 مستندات کامل | [docs.hr-dev.ir](https://docs.hr-dev.ir) |
| 🐛 گزارش باگ | [GitHub Issues](https://github.com/hadi-rostami/rubika-bot/issues) |


## 📄 مجوز
این پروژه تحت مجوز **MIT** منتشر شده است.

- برای جزئیات به فایل [LICENSE](LICENSE) مراجعه کنید.