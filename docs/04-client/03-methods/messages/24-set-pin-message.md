---
slug: /client/methods/set-pin-message
id: learn-client-set-pin-message-method
sidebar_position: 2
sidebar_label: متد setPinMessage

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setPinMessage`

TODO: توضیحات مربوط به `setPinMessage` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_id` | `string` |
| `action` | `"Pin" , "Unpin"` _(اختیاری، پیش‌فرض: `"Pin"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setPinMessage", async (ctx) => {
  await client.setPinMessage(
    "object_guid: string",
    "message_id: string",
    "Pin"
  );
});

client.run();
```

---