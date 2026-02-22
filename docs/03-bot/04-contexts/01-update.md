---
slug: /bot/contexts/update
id: learn-bot-contexts-update
sidebar_position: 2
sidebar_label: کانتکست Update

last_update:
  date: '2026-02-22'
  author: 'hadi-rostami'
---

# کلاس Update – کانتکست مدیریت رویدادها

کلاس `Update` نمایان‌گر context مربوط به پیام‌های اینلاین (inline) دریافت‌شده از روبیکاست. این کلاس به‌صورت خودکار توسط rubika هنگام دریافت رویداد `"update"` ساخته شده و به هندلر پاس داده می‌شود.

### ویژگی‌های کلاس (Properties)

| ویژگی                 | نوع                                                 | توضیحات                                                        |
| --------------------- | --------------------------------------------------- | -------------------------------------------------------------- |
| `type`                | [UpdateTypeEnum](/docs/robot/models#updatetypeenum) | نوع رویداد دریافتی (مثلاً `NewMessage`, `DeletedMessage`)      |
| `chat_id`             | `string`                                            | شناسه یکتای چت، گروه یا کانال                                  |
| `new_message?`        | [Message](/docs/robot/models#message)               | آبجکت پیام جدید (در صورت وجود)                                 |
| `updated_message?`    | [Message](/docs/robot/models#message)               | آبجکت اپدیت پیام (در صورت وجود)                                |
| `removed_message_id?` | `string`                                            | شناسه پیام حذف شده                                             |
| `updated_payment?`    | [PaymentStatus](/docs/robot/models#paymentstatus)   | وضعیت پرداخت (برای رویدادهای مالی)                             |
| `store`               | `Record<string, any>`                               | حافظه موقت برای ذخیره داده‌های دلخواه در طول چرخه حیات درخواست |
| `bot`                 | `Bot`                                               | دسترسی مستقیم به نمونه ربات برای فراخوانی متدهای سطح پایین     |

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

### `banUser(userId?)` / `unbanUser(userId?)`

بن یا آنبن کردن کاربر در چت. اگر userId پاس داده نشود، فرستنده پیام فعلی مد نظر قرار می‌گیرد.

```ts
// بن کردن کاربر مزاحم
if (isSpam) {
  await ctx.banUser();
}
```

## ویژگی‌های خاص

### حافظه موقت (`store`)

می‌توانید داده‌های موقت را در طول پردازش یک درخواست در ctx.store ذخیره کنید تا در فیلترهای بعدی قابل دسترسی باشند.

```ts
// Filter اول
ctx.store.userData = await db.getUser(ctx.new_message.sender_id);

// Filter دوم
const user = ctx.store.userData;
```

### دسترسی مستقیم به Bot

از طریق `ctx.bot` به تمام متدهای اصلی ربات دسترسی دارید:

```ts
const botInfo = await ctx.bot.getMe();
```

## نمونه استفاده کامل

```ts
import Bot, { Filters } from "rubika/bot";

const bot = new Bot("YOUR_TOKEN");

bot.on("update", [Filters.isPrivate], async (ctx) => {
  // 1. استفاده از store برای کش کردن داده‌ها
  ctx.store.user = await fetchUser(ctx.new_message.sender_id);

  if (!ctx.store.user) {
    return await ctx.reply("❌ کاربر یافت نشد.");
  }

  // 2. پاسخ متنی با کیبورد
  await ctx.reply("👋 سلام! چه کمکی از دستم برمی‌آید؟", {
    keyboard: [["📁 فایل‌ها", "👤 پروفایل"], ["❌ بستن"]],
    is_persistent: false,
  });

  // 3. مدیریت دستورات
  if (ctx.new_message.text === "/start") {
    await ctx.replyImage(
      "به ربات خوش آمدید!",
      "welcome.jpg",
      undefined, // chat_keypad
      undefined, // inline_keypad
      true, // disable_notification
    );
  }

  // 4. فوروارد پیام‌های مهم به ادمین
  if (ctx.new_message.text.includes("پشتیبانی")) {
    await ctx.forward("ADMIN_CHAT_ID");
    await ctx.reply("✅ درخواست شما به پشتیبانی ارسال شد.");
  }
});

bot.run();
```

#### نکته حرفه‌ای: متد reply و سایر متدهای مشابه، به‌صورت هوشمند تشخیص می‌دهند که آیا پیام ورودی دارای message_id معتبر است یا خیر. اگر پیام نامعتبر باشد، به‌جای کرش کردن، خطا را از طریق bot.logger ثبت می‌کنند که باعث پایداری بیشتر ربات در محیط Production می‌شود.
