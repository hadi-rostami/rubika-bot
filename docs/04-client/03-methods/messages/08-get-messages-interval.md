---
slug: /client/methods/get-messages-interval
id: learn-client-get-messages-interval-method
sidebar_position: 2
sidebar_label: متد getMessagesInterval

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getMessagesInterval`

TODO: توضیحات مربوط به `getMessagesInterval` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `middle_message_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getMessagesInterval", async (ctx) => {
  await client.getMessagesInterval(
    "object_guid: string",
    "middle_message_id: string"
  );
});

client.run();
```

---