---
slug: /client/methods/click-message-url
id: learn-client-click-message-url-method
sidebar_position: 2
sidebar_label: متد clickMessageUrl

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `clickMessageUrl`

TODO: توضیحات مربوط به `clickMessageUrl` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_id` | `string` |
| `link_url` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/clickMessageUrl", async (ctx) => {
  await client.clickMessageUrl(
    "object_guid: string",
    "message_id: string",
    "link_url: string"
  );
});

client.run();
```

---