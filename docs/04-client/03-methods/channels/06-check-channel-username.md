---
slug: /client/methods/check-channel-username
id: learn-client-check-channel-username-method
sidebar_position: 2
sidebar_label: متد checkChannelUsername

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `checkChannelUsername`

TODO: توضیحات مربوط به `checkChannelUsername` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `username` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/checkChannelUsername", async (ctx) => {
  await client.checkChannelUsername(
    "username: string"
  );
});

client.run();
```

---