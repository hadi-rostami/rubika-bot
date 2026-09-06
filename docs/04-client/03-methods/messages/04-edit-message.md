---
slug: /client/methods/edit-message
id: learn-client-edit-message-method
sidebar_position: 2
sidebar_label: متد editMessage

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `editMessage`

TODO: توضیحات مربوط به `editMessage` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_id` | `string` |
| `text` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/editMessage", async (ctx) => {
  await client.editMessage(
    "object_guid: string",
    "message_id: string",
    "text: string"
  );
});

client.run();
```

---