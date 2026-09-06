---
slug: /client/methods/get-live-status
id: learn-client-get-live-status-method
sidebar_position: 2
sidebar_label: متد getLiveStatus

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getLiveStatus`

TODO: توضیحات مربوط به `getLiveStatus` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `access_token` | `string` |
| `live_id` | `string` |
| `type` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getLiveStatus", async (ctx) => {
  await client.getLiveStatus(
    "access_token: string",
    "live_id: string",
    "type: string"
  );
});

client.run();
```

---