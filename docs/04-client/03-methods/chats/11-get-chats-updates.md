---
slug: /client/methods/get-chats-updates
id: learn-client-get-chats-updates-method
sidebar_position: 2
sidebar_label: متد getChatsUpdates

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getChatsUpdates`

TODO: توضیحات مربوط به `getChatsUpdates` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `state` | `unknown` _(اختیاری، پیش‌فرض: `Math.round(Date.now() / 1000) - 150`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getChatsUpdates", async (ctx) => {
  await client.getChatsUpdates(
    Math.round(Date.now() / 1000) - 150
  );
});

client.run();
```

---