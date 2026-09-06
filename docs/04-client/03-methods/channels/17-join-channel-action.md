---
slug: /client/methods/join-channel-action
id: learn-client-join-channel-action-method
sidebar_position: 2
sidebar_label: متد joinChannelAction

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `joinChannelAction`

TODO: توضیحات مربوط به `joinChannelAction` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `action` | `"Join" | "Remove" | "Archive"` _(اختیاری، پیش‌فرض: `"Join"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/joinChannelAction", async (ctx) => {
  await client.joinChannelAction(
    "channel_guid: string",
    "Join"
  );
});

client.run();
```

---