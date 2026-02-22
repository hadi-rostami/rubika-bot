---
slug: /client/basic-concepts/client-class
id: learn-client-class
sidebar_position: 2
sidebar_label: کلاس Client
last_update:
  date: "2026-02-23"
  author: "hadi-rostami"
---

# کلاس Client – هسته اصلی کتابخانه Rubika

کلاس `Client` نقطه شروع و هسته مرکزی برای ساخت ربات یا کلاینت در کتابخانه **Rubika** است. این کلاس با ترکیب ماژول‌های `Network`، `Methods`، `SessionManager` و سیستم هندلینگ رویدادها، یک ساختار قدرتمند و منعطف برای تعامل با API روبیکا فراهم می‌کند.

## ساختار کلی

```ts
class Client extends Methods {
  // Properties & Methods
}
```

### ورودی سازنده

```ts
constructor(
    private session: ClientTypes.SessionType,
    public platform: ClientTypes.PlatformType = "Web",
    public timeout: number = 5000,
  )
```

- `session`: توکن یا رشته نشست برای احراز هویت در روبیکا
- `platform`: پلتفرم کلاینت (مثلاً Web, Android)
- `timeout`: زمان انتظار برای درخواست‌های شبکه (میلی‌ثانیه)

---

## ویژگی‌ها و اجزای اصلی کلاس

| ویژگی                  | نوع                   | توضیح                                                         |
| ---------------------- | --------------------- | ------------------------------------------------------------- |
| `initialize`           | `boolean`             | وضعیت اولیه‌سازی کلاینت (پیش‌فرض: `false`)                    |
| `key`                  | `Buffer \| undefined` | کلید عمومی برای رمزنگاری ارتباطات                             |
| `privateKey`           | `string \| undefined` | کلید خصوصی کاربر                                              |
| `auth` / `decode_auth` | `string \| undefined` | توکن‌های احراز هویت رمزنگاری شده                              |
| `sessionDb`            | `SessionManager`      | مدیریت ذخیره و بازیابی نشست‌ها                                |
| `network`              | `Network`             | مدیریت درخواست‌های HTTP و WebSocket                           |
| `plugins`              | `RubPlugin[]`         | لیست پلاگین‌های فعال شده                                      |
| `errorMiddlewares`     | `ErrorMiddleware[]`   | میان‌افزارهای مدیریت خطا                                      |
| `userGuid`             | `string \| undefined` | شناسه یکتای کاربر در روبیکا                                   |
| `handlers`             | `ContextMap`          | ثبت‌کننده هندلرهای رویدادها (`message`, `chat`, `error`, ...) |
| `logger`               | `Logger<Client>`      | سیستم لاگ‌گیری هوشمند با پشتیبانی از middleware               |

---

## وظایف کلاس

### 1. ارتباط با API روبیکا

کلاس `network` برای ارسال درخواست به API ربات‌ها استفاده می‌شود. مانند دریافت پیام، پاسخ‌دهی، و مدیریت فایل‌ها.

### 2. سیستم رویدادها (Handler)

هر نوع پیام، مانند `message`, `chat`, `error`, `activities`, `notifications` ، می‌تواند مجموعه‌ای از هندلرها داشته باشد که با دریافت پیام یا ارور اجرا می‌شوند.

---

## نتیجه‌گیری

کلاس `Bot` یکی از ارکان اصلی Rubika است و پایه‌ای برای ساخت ربات‌های پیشرفته روی پلتفرم روبیکا فراهم می‌کند. با استفاده از این کلاس، توسعه‌دهنده‌ها می‌توانند سریعاً یک ربات با قابلیت‌های مختلف ایجاد کنند.
