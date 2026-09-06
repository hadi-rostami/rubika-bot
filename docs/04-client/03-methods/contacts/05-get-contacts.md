---
slug: /client/methods/get-contacts
id: learn-client-get-contacts-method
sidebar_position: 2
sidebar_label: متد getContacts

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getContacts`

TODO: توضیحات مربوط به `getContacts` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `start_id` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getContacts", async (ctx) => {
  await client.getContacts(
    "start_id: string"
  );
});

client.run();
```

---