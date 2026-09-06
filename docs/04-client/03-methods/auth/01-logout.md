---
slug: /client/methods/logout
id: learn-client-logout-method
sidebar_position: 2
sidebar_label: متد logout

last_update:
  date: "2026-09-06"
  author: "hadi-rostami"
---

# `logout`

TODO: توضیحات مربوط به `logout` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| —   | —   |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/logout", async (ctx) => {
  await client.logout();
});

client.run();
```

---
