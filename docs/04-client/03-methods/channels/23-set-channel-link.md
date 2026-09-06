---
slug: /client/methods/set-channel-link
id: learn-client-set-channel-link-method
sidebar_position: 2
sidebar_label: متد setChannelLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setChannelLink`

TODO: توضیحات مربوط به `setChannelLink` را وارد کنید.

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

client.command("/setChannelLink", async (ctx) => {
  await client.setChannelLink(
    "channel_guid: string"
  );
});

client.run();
```

---