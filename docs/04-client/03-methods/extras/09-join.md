---
slug: /client/methods/join
id: learn-client-join-method
sidebar_position: 2
sidebar_label: متد join

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `join`

TODO: توضیحات مربوط به `join` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `chat` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/join", async (ctx) => {
  await client.join(
    "chat: string"
  );
});

client.run();
```

---