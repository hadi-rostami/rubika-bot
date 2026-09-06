---
slug: /client/methods/reset-contacts
id: learn-client-reset-contacts-method
sidebar_position: 2
sidebar_label: متد resetContacts

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `resetContacts`

TODO: توضیحات مربوط به `resetContacts` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| — | — | این متد پارامتری دریافت نمی‌کند. |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/resetContacts", async (ctx) => {
  await client.resetContacts();
});

client.run();
```

---