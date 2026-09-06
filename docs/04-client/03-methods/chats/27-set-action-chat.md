---
slug: /client/methods/set-action-chat
id: learn-client-set-action-chat-method
sidebar_position: 2
sidebar_label: متد setActionChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setActionChat`

TODO: توضیحات مربوط به `setActionChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `action` | `"Mute" | "Unmute"` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setActionChat", async (ctx) => {
  await client.setActionChat(
    "object_guid: string",
    "action: "Mute" | "Unmute""
  );
});

client.run();
```

---