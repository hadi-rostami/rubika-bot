---
slug: /client/methods/seen-channel-messages
id: learn-client-seen-channel-messages-method
sidebar_position: 2
sidebar_label: متد seenChannelMessages

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `seenChannelMessages`

TODO: توضیحات مربوط به `seenChannelMessages` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `min_id` | `string | number` |
| `max_id` | `string | number` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/seenChannelMessages", async (ctx) => {
  await client.seenChannelMessages(
    "channel_guid: string",
    "min_id: string | number",
    "max_id: string | number"
  );
});

client.run();
```

---