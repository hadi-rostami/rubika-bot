---
slug: /client/methods/get-message-share-url
id: learn-client-get-message-share-url-method
sidebar_position: 2
sidebar_label: متد getMessageShareUrl

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getMessageShareUrl`

TODO: توضیحات مربوط به `getMessageShareUrl` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getMessageShareUrl", async (ctx) => {
  await client.getMessageShareUrl(
    "object_guid: string",
    "message_id: string"
  );
});

client.run();
```

---