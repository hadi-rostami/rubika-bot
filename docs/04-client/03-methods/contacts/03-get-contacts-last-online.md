---
slug: /client/methods/get-contacts-last-online
id: learn-client-get-contacts-last-online-method
sidebar_position: 2
sidebar_label: متد getContactsLastOnline

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getContactsLastOnline`

TODO: توضیحات مربوط به `getContactsLastOnline` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `user_guids` | `string[]` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getContactsLastOnline", async (ctx) => {
  await client.getContactsLastOnline(
    "user_guids: string[]"
  );
});

client.run();
```

---