---
slug: /bot/contexts/event
id: learn-bot-contexts-event
sidebar_position: 2
sidebar_label: کانتکست Events

last_update:
  date: "2026-02-18"
  author: "hadi-rostami"
---

# کلاس Events – کانتکست مدیریت رویدادها

کلاس `Events` نمایان‌گر context مربوط به پیام‌های ایونت (events) دریافت‌شده از روبیکاست. این کلاس به‌صورت خودکار توسط rubika هنگام دریافت رویداد `"events"` ساخته شده و به هندلر پاس داده می‌شود.

---

## فیلدها

| ویژگی              | نوع                                           | توضیحات                                                        |
| ------------------ | --------------------------------------------- | -------------------------------------------------------------- |
| `type`             | [UpdateTypeEnum](/docs/models#updatetypeenum) | نوع رویداد دریافتی (مثلاً `NewMessage`, `DeletedMessage`)      |
| `chat_id`          | `string`                                      | شناسه یکتای چت، گروه یا کانال                                  |
| `event_data`       | [EventData](/docs/models#eventdata)           | اطلاعات رویداد                                                 |
| `updated_message?` | [Message](/docs/models#message)               | آبجکت اپدیت پیام (در صورت وجود)                                |
| `store`            | `Record<string, any>`                         | حافظه موقت برای ذخیره داده‌های دلخواه در طول چرخه حیات درخواست |
| `bot`              | `Bot`                                         | دسترسی مستقیم به نمونه ربات برای فراخوانی متدهای سطح پایین     |

---

## متدهای پاسخ‌دهی (Reply Methods)

تمامی این متدها به‌صورت خودکار به پیام کاربر Reply می‌دهند (پاسخ متصل).

### `reply(text, ...options)`

ارسال پیام متنی ساده به عنوان پاسخ.

```ts
await ctx.reply("سلام! پیام شما دریافت شد.");
```

---

### `replyImage(file, text? , ...options)`

ارسال عکس همراه با کپشن.

```ts
await ctx.replyImage("path/to/file");
```

---

### `replyVideo(file, text? , ...options)`

ارسال ویدیو همراه با کپشن.

```ts
await ctx.replyVideo("path/to/file", "این یک ویدیو است.");
```

---

### `replyGif(file, text? , ...options)`

ارسال گیف همراه با کپشن.

```ts
await ctx.replyGif("path/to/file");
```

---

### `replySticker(sticker_id, ...options)`

ارسال استیکر با شناسه اختصاصی.

```ts
await ctx.replySticker("sticker_12345");
```

---

### `replyMusic / replyVoice(file, text? , ...options)`

ارسال فایل صوتی (موزیک) یا ویس (پیام صوتی).

```ts
await ctx.replyMusic("path/to/file", "این یک آهنگ است.");
await ctx.replyVoice("path/to/file");
```

---

### `replyFile(file, text? , ...options)`

ارسال هر نوع فایل عمومی (سند، PDF، ZIP و...).

```ts
await ctx.replyFile("path/to/file");
```

---

### `replyLocation(latitude, longitude, ...options)`

ارسال موقعیت مکانی روی نقشه.

```ts
await ctx.replyLocation("35.6997", "51.3380"); // تهران
```

---

### `replyContact(firstName, lastName, phone, ...options)`

ارسال کارت تماس (Contact).

```ts
await ctx.replyContact("هادی", "رستمی", "989123456789");
```

---

### `replyPoll(question, options, auto_delete?)`

ارسال نظرسنجی (Poll) به چت.

```ts
await ctx.replyPoll("کدام فریم‌ورک بهتر است؟", ["React", "Vue", "Svelte"]);
```

---

###### ⚠ نکته: تمام متدهای بالا از پارامترهای مشترکی مثل chat_keypad (دکمه‌های شیشه‌ای کیبورد)، inline_keypad (دکمه‌های زیر پیام)، disable_notification (بی‌صدا ارسال کردن) و auto_delete (حذف خودکار پس از زمان مشخص) پشتیبانی می‌کنند.

---

## استفاده

```ts
import { Bot, EventJoinTypeEnum, EventTypeEnum } from "rubika/bot";

const bot = new Bot("YOUR_TOKEN");

bot.on("events", async (ctx) => {
  if (ctx.event_data.type === EventTypeEnum.BotPermissionsChanged)
    await ctx.reply("Bot permissions changed");

  if (ctx.event_data.type === EventTypeEnum.BotJoined)
    await ctx.reply("Bot joined group or channel");

  if (ctx.event_data.type === EventTypeEnum.BotRemoved)
    await ctx.reply("Bot removed from group or channel");

  if (ctx.event_data.join_type === EventJoinTypeEnum.Admin)
    await ctx.reply("Bot permissions to admin");

  if (ctx.event_data.join_type === EventJoinTypeEnum.Member)
    await ctx.reply("Bot permissions to user");
});

bot.run();
```

#### نکته حرفه‌ای: متد reply و سایر متدهای مشابه، به‌صورت هوشمند تشخیص می‌دهند که آیا پیام ورودی دارای message_id معتبر است یا خیر. اگر پیام نامعتبر باشد، به‌جای کرش کردن، خطا را از طریق bot.logger ثبت می‌کنند که باعث پایداری بیشتر ربات در محیط Production می‌شود.
