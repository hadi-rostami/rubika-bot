---
slug: /client/methods/seen-group-messages
id: learn-client-seen-group-messages-method
sidebar_position: 2
sidebar_label: متد seenGroupMessages

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `seenGroupMessages`

TODO: توضیحات مربوط به `seenGroupMessages` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `min_id` | `string | number` |
| `max_id` | `string | number` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/seenGroupMessages", async (ctx) => {
  await client.seenGroupMessages(
    "group_guid: string",
    "min_id: string | number",
    "max_id: string | number"
  );
});

client.run();
```

---