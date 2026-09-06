---
slug: /client/methods/get-messages-by-id
id: learn-client-get-messages-by-id-method
sidebar_position: 2
sidebar_label: متد getMessagesByID

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getMessagesByID`

TODO: توضیحات مربوط به `getMessagesByID` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_ids` | `string , string[]` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getMessagesByID", async (ctx) => {
  await client.getMessagesByID(
    "object_guid: string",
    "message_ids: string | string[]"
  );
});

client.run();
```

---