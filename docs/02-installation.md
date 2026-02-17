---
sidebar_position: 2
---

# نصب و راه‌اندازی rubika

برای شروع استفاده از `rubika` ابتدا باید Bun.js روی سیستم شما نصب باشد.

## مراحل نصب

1. ایجاد یک پوشه‌ی جدید برای پروژه‌ی ربات:

```bash
mkdir my-rubika-bot
cd my-rubika-bot
```

2. ایجاد یک پروژه‌ی Bun.js:

```bash
bun init -y
```

3. نصب بسته‌ی `rubika`:

```bash
bun add rubika
```

4. ساخت اولین فایل ربات:

در درون فایل `index.ts` کد زیر را قرار دهید:

```ts
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.on("update", async (message) => {
  await message.reply('hello from rubika!');
});

bot.run();
```

5. اجرای ربات:

```bash
bun run index.ts
```

اگر همه مراحل را درست انجام داده باشید، ربات شما فعال خواهد شد و پیام `hello from rubika!` ارسال می‌کند.
