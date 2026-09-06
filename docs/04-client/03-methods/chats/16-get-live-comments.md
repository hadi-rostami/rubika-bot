---
slug: /client/methods/get-live-comments
id: learn-client-get-live-comments-method
sidebar_position: 2
sidebar_label: متد getLiveComments

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getLiveComments`

TODO: توضیحات مربوط به `getLiveComments` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `access_token` | `string` |
| `live_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getLiveComments", async (ctx) => {
  await client.getLiveComments(
    "access_token: string",
    "live_id: string"
  );
});

client.run();
```

---