---
slug: /client/methods/get-chats
id: learn-client-get-chats-method
sidebar_position: 2
sidebar_label: متد getChats

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getChats`

TODO: توضیحات مربوط به `getChats` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `start_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getChats", async (ctx) => {
  await client.getChats(
    "start_id: string"
  );
});

client.run();
```

---