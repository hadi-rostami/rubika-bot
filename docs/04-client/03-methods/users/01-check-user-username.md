---
slug: /client/methods/check-user-username
id: learn-client-check-user-username-method
sidebar_position: 2
sidebar_label: متد checkUserUsername

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `checkUserUsername`

TODO: توضیحات مربوط به `checkUserUsername` را وارد کنید.

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

client.command("/checkUserUsername", async (ctx) => {
  await client.checkUserUsername(
    "username: string"
  );
});

client.run();
```

---