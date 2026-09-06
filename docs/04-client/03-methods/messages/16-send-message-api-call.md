---
slug: /client/methods/send-message-api-call
id: learn-client-send-message-api-call-method
sidebar_position: 2
sidebar_label: متد sendMessageAPICall

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendMessageAPICall`

TODO: توضیحات مربوط به `sendMessageAPICall` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `text` | `string` |
| `object_guid` | `string` |
| `message_id` | `string` |
| `aux_data` | `{ button_id: string }` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendMessageAPICall", async (ctx) => {
  await client.sendMessageAPICall(
    "text: string",
    "object_guid: string",
    "message_id: string",
    "aux_data: { button_id: string }"
  );
});

client.run();
```

---