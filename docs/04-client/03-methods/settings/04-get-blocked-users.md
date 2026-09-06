---
slug: /client/methods/get-blocked-users
id: learn-client-get-blocked-users-method
sidebar_position: 2
sidebar_label: متد getBlockedUsers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getBlockedUsers`

TODO: توضیحات مربوط به `getBlockedUsers` را وارد کنید.

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

client.command("/getBlockedUsers", async (ctx) => {
  await client.getBlockedUsers();
});

client.run();
```

---