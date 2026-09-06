---
slug: /client/methods/update-profile
id: learn-client-update-profile-method
sidebar_position: 2
sidebar_label: متد updateProfile

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `updateProfile`

TODO: توضیحات مربوط به `updateProfile` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `first_name` | `string  null` _(اختیاری، پیش‌فرض: `null`)_ |
| `last_name` | `string  null` _(اختیاری، پیش‌فرض: `null`)_ |
| `bio` | `string  null` _(اختیاری، پیش‌فرض: `null`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/updateProfile", async (ctx) => {
  await client.updateProfile(
    null,
    null,
    null
  );
});

client.run();
```

---