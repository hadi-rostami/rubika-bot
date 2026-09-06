---
slug: /client/methods/update-channel-username
id: learn-client-update-channel-username-method
sidebar_position: 2
sidebar_label: متد updateChannelUsername

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `updateChannelUsername`

TODO: توضیحات مربوط به `updateChannelUsername` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `username` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/updateChannelUsername", async (ctx) => {
  await client.updateChannelUsername(
    "channel_guid: string",
    "username: string"
  );
});

client.run();
```

---