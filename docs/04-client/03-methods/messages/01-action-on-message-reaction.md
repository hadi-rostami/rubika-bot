---
slug: /client/methods/action-on-message-reaction
id: learn-client-action-on-message-reaction-method
sidebar_position: 2
sidebar_label: متد actionOnMessageReaction

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `actionOnMessageReaction`

TODO: توضیحات مربوط به `actionOnMessageReaction` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_id` | `string` |
| `reaction_id` | `number | null` _(اختیاری، پیش‌فرض: `null`)_ |
| `action` | `"Add" | "Remove"` _(اختیاری، پیش‌فرض: `"Add"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/actionOnMessageReaction", async (ctx) => {
  await client.actionOnMessageReaction(
    "object_guid: string",
    "message_id: string",
    null,
    "Add"
  );
});

client.run();
```

---