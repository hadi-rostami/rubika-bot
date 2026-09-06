---
slug: /client/methods/leave-chat
id: learn-client-leave-chat-method
sidebar_position: 2
sidebar_label: متد leaveChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `leaveChat`

TODO: توضیحات مربوط به `leaveChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/leaveChat", async (ctx) => {
  await client.leaveChat(
    "object_guid: string"
  );
});

client.run();
```

---