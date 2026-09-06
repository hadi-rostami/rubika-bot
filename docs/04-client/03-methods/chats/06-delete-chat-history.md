---
slug: /client/methods/delete-chat-history
id: learn-client-delete-chat-history-method
sidebar_position: 2
sidebar_label: متد deleteChatHistory

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `deleteChatHistory`

TODO: توضیحات مربوط به `deleteChatHistory` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `last_message_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/deleteChatHistory", async (ctx) => {
  await client.deleteChatHistory(
    "object_guid: string",
    "last_message_id: string"
  );
});

client.run();
```

---