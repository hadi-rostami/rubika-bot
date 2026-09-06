---
slug: /client/methods/remove-channel
id: learn-client-remove-channel-method
sidebar_position: 2
sidebar_label: متد removeChannel

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `removeChannel`

TODO: توضیحات مربوط به `removeChannel` را وارد کنید.

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

client.command("/removeChannel", async (ctx) => {
  await client.removeChannel(
    "channel_guid: string"
  );
});

client.run();
```

---