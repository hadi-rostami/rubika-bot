---
slug: /client/methods/send-text
id: learn-client-send-text-method
sidebar_position: 2
sidebar_label: متد sendText

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendText`

TODO: توضیحات مربوط به `sendText` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `text` | `string` |
| `reply_id` | `string` _(اختیاری)_ |
| `aux_data` | `{ button_id: string }` _(اختیاری)_ |
| `auto_delete` | `number` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendText", async (ctx) => {
  await client.sendText(
    "object_guid: string",
    "text: string",
    "reply_id: string",
    "aux_data: { button_id: string }",
    "auto_delete: number"
  );
});

client.run();
```

---