---
slug: /client/methods/get-folders
id: learn-client-get-folders-method
sidebar_position: 2
sidebar_label: متد getFolders

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getFolders`

TODO: توضیحات مربوط به `getFolders` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `last_state` | `unknown` _(اختیاری، پیش‌فرض: `Math.round(Date.now() / 1000) - 150`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getFolders", async (ctx) => {
  await client.getFolders(
    Math.round(Date.now() / 1000) - 150
  );
});

client.run();
```

---