---
slug: /client/methods/get-banned-channel-members
id: learn-client-get-banned-channel-members-method
sidebar_position: 2
sidebar_label: متد getBannedChannelMembers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getBannedChannelMembers`

TODO: توضیحات مربوط به `getBannedChannelMembers` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `start_id` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getBannedChannelMembers", async (ctx) => {
  await client.getBannedChannelMembers(
    "channel_guid: string",
    "start_id: string"
  );
});

client.run();
```

---