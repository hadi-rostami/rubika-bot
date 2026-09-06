---
slug: /client/methods/get-live-play-url
id: learn-client-get-live-play-url-method
sidebar_position: 2
sidebar_label: متد getLivePlayUrl

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getLivePlayUrl`

TODO: توضیحات مربوط به `getLivePlayUrl` را وارد کنید.

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

client.command("/getLivePlayUrl", async (ctx) => {
  await client.getLivePlayUrl(
    "access_token: string",
    "live_id: string"
  );
});

client.run();
```

---