# کلاس Filters – فیلترهای پیش‌ساخته

کلاس `Filters` مجموعه‌ای از فیلترهای ساده و کاربردی برای تشخیص نوع پیام دریافتی در ربات است. این فیلترها به‌صورت متدهای استاتیک پیاده‌سازی شده‌اند تا بتوان از آن‌ها مستقیماً در هندلرها یا شرط‌ها استفاده کرد.

> **وابستگی‌ها**:
>
> - `Message`: ساختار پیام استاندارد در Rubika
> - `ClientFilters.findKey(...)`: متدی برای بررسی وجود کلید خاص در پیام

---

## فیلترهای پایه

### `findKey(message: any, key: string): any`

جستجوی بازگشتی برای یافتن مقدار یک کلید خاص در شیء پیام یا توابع تو در تو.

---

### `isText(message: Update): boolean`

بررسی می‌کند که آیا پیام دارای محتوای متنی (text) است یا خیر.

---

### `isPersian(message: Update): boolean`

بررسی وجود کاراکترهای فارسی در متن پیام.

---

### `isLocation(message: Update): boolean`

بررسی وجود موقعیت مکانی (location) در پیام.

---

### `isTag(message: Update): boolean`

بررسی وجود هشتگ (#) در متن پیام.

---

### `isSpam(message: Update): boolean`

بررسی اسپم بودن پیام بر اساس طول متن (بیشتر از ۱۰۰۰ کاراکتر).

---

### `isSticker(message): boolean`

تشخیص اینکه پیام حاوی استیکر است.

---

### `isLink(message: Update): boolean`

بررسی وجود لینک URL در متن پیام.

---

### `isUsername(message: Update): boolean`

بررسی وجود نام کاربری (الگوی @...) در متن پیام.

---

### `isForward(message): boolean`

بررسی اینکه پیام از کاربر دیگری فوروارد شده (forwarded_from) است یا نه.

---

### `isReply(message: Update): boolean`

بررسی اینکه آیا پیام پاسخ به پیام دیگری (reply_to_message_id) است یا خیر.

---

### `isContact(message: Update): boolean`

بررسی وجود اطلاعات تماس (contact_message) در پیام.

---

### `isPoll(message: Update): boolean`

بررسی وجود نظرسنجی (poll) در پیام.

---

### `isLiveLocation(message: Update): boolean`

بررسی وجود موقعیت مکانی زنده (live_location) در پیام.

---

### `isFile(message: Update): boolean`

بررسی وجود فایل پیوست در پیام.

---

### `isMention(message: Update): boolean`

بررسی وجود منشن یا لینک در متادیتای پیام (meta_data_parts).

---

### `isMarkdown(message: Update): boolean`

بررسی وجود متادیتای مارک‌داون (metadata) در پیام.

---

### `isDelete(message: Update): boolean`

بررسی حذف شدن پیام (removed_message_id).

---

### `isPayment(message: Update): boolean`

بررسی وجود پرداخت (updated_payment) در پیام.

---

### `isPrivate(message: Update | Inline): boolean`

بررسی اینکه آیا چت خصوصی است (شناسه چت با b0 شروع می‌شود).

---

### `isGroup(message: Update | Inline): boolean`

بررسی اینکه آیا چت گروهی است (شناسه چت با g0 شروع می‌شود).

---

### `isChannel(message: Update | Inline): boolean`

بررسی اینکه آیا چت کانال است (شناسه چت با c0 شروع می‌شود).

---

### `isNewMessage(message: Update): boolean`

بررسی اینکه آیا نوع رویداد، پیام جدید (NewMessage) است.

---

### `isUpdatedMessage(message: Update): boolean`

بررسی اینکه آیا نوع رویداد، پیام ویرایش شده (UpdatedMessage) است.

---

### `isRemovedMessage(message: Update): boolean`

بررسی اینکه آیا نوع رویداد، پیام حذف شده (RemovedMessage) است.

---

### `isStartedBot(message: Update): boolean`

بررسی اینکه آیا کاربر ربات را شروع کرده است (StartedBot).

---

### `isStoppedBot(message: Update): boolean`

بررسی اینکه آیا کاربر ربات را متوقف کرده است (StoppedBot).

---

### `isUpdatedPayment(message: Update): boolean`

بررسی اینکه آیا نوع رویداد، پرداخت به‌روزرسانی شده (UpdatedPayment) است.

---

## فیلترهای قابل سفارشی‌سازی

### `kypadID(button_id: string): (message: Message) => boolean`

فیلتر داینامیکی برای بررسی مقدار `button_id` در پیام. خروجی این تابع یک تابع دیگر است که می‌توان آن را مستقیماً در شرط‌ها یا هندلرها استفاده کرد.

#### مثال:

```ts
import Bot, { Filters } from "rubika";

const bot = new Bot("YOUR_TOKEN");

const filters = [Filters.kypadID("confirm_delete"), Filters.isDelete];

bot.on("update", filters, async (ctx) => {
  console.log(ctx);
});

bot.run();
```
