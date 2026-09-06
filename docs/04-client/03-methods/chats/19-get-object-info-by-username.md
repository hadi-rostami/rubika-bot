---
slug: /client/methods/get-object-info-by-username
id: learn-client-get-object-info-by-username-method
sidebar_position: 2
sidebar_label: متد getObjectInfoByUsername

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getObjectInfoByUsername`

TODO: توضیحات مربوط به `getObjectInfoByUsername` را وارد کنید.

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

client.command("/getObjectInfoByUsername", async (ctx) => {
  await client.getObjectInfoByUsername(
    "username: string"
  );
});

client.run();
```

---