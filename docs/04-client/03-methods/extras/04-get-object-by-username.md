---
slug: /client/methods/get-object-by-username
id: learn-client-get-object-by-username-method
sidebar_position: 2
sidebar_label: متد getObjectByUsername

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getObjectByUsername`

TODO: توضیحات مربوط به `getObjectByUsername` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `username` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getObjectByUsername", async (ctx) => {
  await client.getObjectByUsername(
    "username: string"
  );
});

client.run();
```

---