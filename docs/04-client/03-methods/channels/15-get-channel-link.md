---
slug: /client/methods/get-channel-link
id: learn-client-get-channel-link-method
sidebar_position: 2
sidebar_label: متد getChannelLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getChannelLink`

TODO: توضیحات مربوط به `getChannelLink` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getChannelLink", async (ctx) => {
  await client.getChannelLink(
    "channel_guid: string"
  );
});

client.run();
```

---