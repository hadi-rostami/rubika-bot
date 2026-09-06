---
slug: /client/methods/get-me
id: learn-client-get-me-method
sidebar_position: 2
sidebar_label: متد getMe

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getMe`

TODO: توضیحات مربوط به `getMe` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| — | — |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getMe", async (ctx) => {
  await client.getMe(
    
  );
});

client.run();
```

---