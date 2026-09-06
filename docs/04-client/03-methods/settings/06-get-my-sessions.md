---
slug: /client/methods/get-my-sessions
id: learn-client-get-my-sessions-method
sidebar_position: 2
sidebar_label: متد getMySessions

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getMySessions`

TODO: توضیحات مربوط به `getMySessions` را وارد کنید.

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

client.command("/getMySessions", async (ctx) => {
  await client.getMySessions();
});

client.run();
```

---