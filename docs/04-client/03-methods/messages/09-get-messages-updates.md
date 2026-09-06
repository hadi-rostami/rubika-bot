---
slug: /client/methods/get-messages-updates
id: learn-client-get-messages-updates-method
sidebar_position: 2
sidebar_label: متد getMessagesUpdates

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getMessagesUpdates`

TODO: توضیحات مربوط به `getMessagesUpdates` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `state` | `number` _(اختیاری، پیش‌فرض: `Math.round(Date.now() / 1000) - 150`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getMessagesUpdates", async (ctx) => {
  await client.getMessagesUpdates(
    "object_guid: string",
    Math.round(Date.now() / 1000) - 150
  );
});

client.run();
```

---