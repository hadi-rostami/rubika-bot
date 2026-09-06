---
slug: /client/methods/delete-user-chat
id: learn-client-delete-user-chat-method
sidebar_position: 2
sidebar_label: متد deleteUserChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `deleteUserChat`

TODO: توضیحات مربوط به `deleteUserChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `user_guid` | `string` |
| `last_deleted_message_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/deleteUserChat", async (ctx) => {
  await client.deleteUserChat(
    "user_guid: string",
    "last_deleted_message_id: string"
  );
});

client.run();
```

---