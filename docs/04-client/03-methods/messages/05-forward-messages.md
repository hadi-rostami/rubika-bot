---
slug: /client/methods/forward-messages
id: learn-client-forward-messages-method
sidebar_position: 2
sidebar_label: متد forwardMessages

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `forwardMessages`

TODO: توضیحات مربوط به `forwardMessages` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `from_object_guid` | `string` |
| `to_object_guid` | `string` |
| `message_ids` | `string , string[]` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/forwardMessages", async (ctx) => {
  await client.forwardMessages(
    "from_object_guid: string",
    "to_object_guid: string",
    "message_ids: string | string[]"
  );
});

client.run();
```

---