---
slug: /client/methods/change-password
id: learn-client-change-password-method
sidebar_position: 2
sidebar_label: متد changePassword

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `changePassword`

TODO: توضیحات مربوط به `changePassword` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `password` | `string` |
| `new_password` | `string` |
| `new_hint` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/changePassword", async (ctx) => {
  await client.changePassword(
    "password: string",
    "new_password: string",
    "new_hint: string"
  );
});

client.run();
```

---