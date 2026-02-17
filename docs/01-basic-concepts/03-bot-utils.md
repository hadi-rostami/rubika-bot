# کلاس Utils – ابزارهای فرمت‌دهی متن

کلاس Utils مجموعه‌ای از متدهای استاتیک و کاربردی برای فرمت‌دهی سریع رشته‌های متنی (Markdown) است. این متدها به شما کمک می‌کنند تا بدون درگیر شدن با کاراکترهای خاص، متن‌های خود را برای ارسال در پیام‌رسان‌هایی مانند روبیکا آماده‌سازی کنید.

## متدهای فرمت‌دهی

### `Mono(text: string): string`

متن ورودی را*trim* کرده و آن را درون کاراکترهای کد تک‌خطی (`) قرار می‌دهد.

#### مثال:

```ts
Utils.Mono("Hello"); // خروجی: `Hello`
```

---

### `Pre(text: string): string`

متن ورودی را*trim* کرده و آن را برای نمایش به صورت کد چندخطی (Block Code) آماده می‌کند.

#### مثال:

````ts
Utils.Pre("console.log('Hi')"); // خروجی: ```console.log('Hi')```
````

---

### `Bold(text: string): string`

متن ورودی را*trim* کرده و آن را پررنگ (Bold) می‌کند.

#### مثال:

```ts
Utils.Bold("Important"); // خروجی: **Important**
```

---

### `Italic(text: string): string`

متن ورودی را*trim* کرده و آن را مورب (Italic) می‌کند.

#### مثال:

```ts
Utils.Italic("Note"); // خروجی: __Note__
```

---

### `Spoiler(text: string): string`

متن ورودی را*trim* کرده و آن را به صورت اسپویل (مخفی) در می‌آورد.

#### مثال:

```ts
Utils.Spoiler("Secret"); // خروجی: ||Secret||
```

---

### `Strike(text: string): string`

متن ورودی را*trim* کرده و روی آن خط می‌کشد (Strike-through).

#### مثال:

```ts
Utils.Strike("Deleted"); // خروجی: ~~Deleted~~
```

---

### `Underline(text: string): string`

متن ورودی را*trim* کرده و آن را زیرخط‌دار (Underline) می‌کند.

#### مثال:

```ts
Utils.Underline("Title"); // خروجی: --Title--
```

---

### `Quote(text: string): string`

متن ورودی را*trim* کرده و آن را در قالب نقل قول قرار می‌دهد.

#### مثال:

```ts
Utils.Quote("Reply"); // خروجی: >Reply>
```

---

### `HyperLink(text: string, link: string): string`

یک لینک کلیک‌خور با متن نمایشی مشخص ایجاد می‌کند.

#### مثال:

```ts
Utils.HyperLink("Google", "https://google.com");
// خروجی: [Google](https://google.com)
```

### نمونه استفاده کامل

در اینجا نحوه استفاده از این کلاس را در یک هندلر ربات مشاهده می‌کنید:

```ts
import Bot, { Utils } from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.on("update", async (ctx) => {
  // ارسال پیام با فرمت‌های مختلف
  await ctx.reply(
    `${Utils.Bold("سلام!")}\n` +
      `${Utils.Italic("این یک تست است")}\n` +
      `${Utils.Mono("کد تست")}\n` +
      `${Utils.HyperLink("وب‌سایت ما", "https://example.com")}`,
  );
});

bot.run();
```
