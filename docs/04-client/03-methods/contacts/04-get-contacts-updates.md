---
slug: /client/methods/get-contacts-updates
id: learn-client-get-contacts-updates-method
sidebar_position: 2
sidebar_label: متد getContactsUpdates

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getContactsUpdates`

TODO: توضیحات مربوط به `getContactsUpdates` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `state` | `number` _(اختیاری، پیش‌فرض: `Math.round(Date.now() / 1000) - 150`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getContactsUpdates", async (ctx) => {
  await client.getContactsUpdates(
    Math.round(Date.now() / 1000) - 150
  );
});

client.run();
```

---