---
slug: /client/methods/get-channel-info
id: learn-client-get-channel-info-method
sidebar_position: 2
sidebar_label: متد getChannelInfo

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getChannelInfo`

TODO: توضیحات مربوط به `getChannelInfo` را وارد کنید.

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

client.command("/getChannelInfo", async (ctx) => {
  await client.getChannelInfo(
    "channel_guid: string"
  );
});

client.run();
```

---