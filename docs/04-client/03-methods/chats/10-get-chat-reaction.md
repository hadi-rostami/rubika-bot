---
slug: /client/methods/get-chat-reaction
id: learn-client-get-chat-reaction-method
sidebar_position: 2
sidebar_label: متد getChatReaction

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getChatReaction`

TODO: توضیحات مربوط به `getChatReaction` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `min_id` | `string` |
| `max_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getChatReaction", async (ctx) => {
  await client.getChatReaction(
    "object_guid: string",
    "min_id: string",
    "max_id: string"
  );
});

client.run();
```

---