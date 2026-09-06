---
slug: /client/methods/update-username
id: learn-client-update-username-method
sidebar_position: 2
sidebar_label: متد updateUsername

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `updateUsername`

TODO: توضیحات مربوط به `updateUsername` را وارد کنید.

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

client.command("/updateUsername", async (ctx) => {
  await client.updateUsername(
    "username: string"
  );
});

client.run();
```

---