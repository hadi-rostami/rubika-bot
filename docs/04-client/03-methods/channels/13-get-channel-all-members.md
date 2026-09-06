---
slug: /client/methods/get-channel-all-members
id: learn-client-get-channel-all-members-method
sidebar_position: 2
sidebar_label: متد getChannelAllMembers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getChannelAllMembers`

TODO: توضیحات مربوط به `getChannelAllMembers` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `search_text` | `string` _(اختیاری)_ |
| `start_id` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getChannelAllMembers", async (ctx) => {
  await client.getChannelAllMembers(
    "channel_guid: string",
    "search_text: string",
    "start_id: string"
  );
});

client.run();
```

---