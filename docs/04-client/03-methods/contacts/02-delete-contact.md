---
slug: /client/methods/delete-contact
id: learn-client-delete-contact-method
sidebar_position: 2
sidebar_label: متد deleteContact

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `deleteContact`

TODO: توضیحات مربوط به `deleteContact` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `user_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/deleteContact", async (ctx) => {
  await client.deleteContact(
    "user_guid: string"
  );
});

client.run();
```

---