---
slug: /contexts/inline
id: learn-bot-contexts-inline
sidebar_position: 2
sidebar_label: کانتکست Inline

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# کلاس Inline – کانتکست مدیریت رویدادها

کلاس `Inline` نمایان‌گر context مربوط به پیام‌های اینلاین (inline) دریافت‌شده از روبیکاست. این کلاس به‌صورت خودکار توسط rubika هنگام دریافت رویداد `"inline"` ساخته شده و به هندلر پاس داده می‌شود.

---

## فیلدها

| ویژگی        | نوع                                      | توضیحات                                                    |
| ------------ | ---------------------------------------- | ---------------------------------------------------------- |
| `sender_id`  | `string`                                 | آیدی کاربری که پیام را ارسال کرده                          |
| `text`       | `string`                                 | متن پیام                                                   |
| `file`       | [File?](/docs/robot/models#file)         | فایل ضمیمه شده (در صورت وجود)                              |
| `location`   | [Location?](/docs/robot/models#location) | موقعیت جغرافیایی ارسال‌شده (در صورت وجود)                  |
| `aux_data`   | [AuxData?](/docs/robot/models#auxdata)   | داده‌های اضافی (مثل اطلاعات پرداخت، دکمه فشرده‌شده و...)   |
| `message_id` | `string`                                 | شناسه یکتا برای پیام                                       |
| `chat_id`    | `string`                                 | شناسه چتی که پیام در آن ارسال شده                          |
| `store`      | `Record<string, any>`                    | فضای ذخیره‌سازی موقتی برای اطلاعات سفارشی در طول هندل      |
| `bot`        | `Bot`                                    | دسترسی مستقیم به نمونه ربات برای فراخوانی متدهای سطح پایین |

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

## متدهای مدیریت پیام و چت

---

### `forward(to_chat_id: string)`

فوروارد کردن پیام فعلی به چت دیگر.

```ts
await ctx.forward("b0..."); // ارسال به چت ادمین
```

---

### `delete(message_id?)`

حذف پیام (پیش‌فرض: پیامی که ربات به آن پاسخ می‌دهد).

```ts
await ctx.delete(); // حذف پیام فعلی
await ctx.delete("message_id"); // حذف پیام دیگر
```

---

### `editMessage(text?, inline_keypad?)`

ویرایش متن یا کیبورد پیام ارسالی ربات.

```ts
await ctx.editMessage("✅ متن ویرایش شد!", myInlineKeypad);
```

---

## استفاده

```ts
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.on("inline", async (ctx) => {
  await ctx.reply("درخواست شما دریافت شد.");
});

bot.run();
```
#### نکته حرفه‌ای: متد reply و سایر متدهای مشابه، به‌صورت هوشمند تشخیص می‌دهند که آیا پیام ورودی دارای message_id معتبر است یا خیر. اگر پیام نامعتبر باشد، به‌جای کرش کردن، خطا را از طریق bot.logger ثبت می‌کنند که باعث پایداری بیشتر ربات در محیط Production می‌شود.