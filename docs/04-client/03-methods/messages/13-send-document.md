---
slug: /client/methods/send-document
id: learn-client-send-document-method
sidebar_position: 2
sidebar_label: متد sendDocument

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendDocument`

TODO: توضیحات مربوط به `sendDocument` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `document` | `string , Buffer<ArrayBufferLike>` |
| `caption` | `string` _(اختیاری)_ |
| `reply_to_message_id` | `string` _(اختیاری)_ |
| `auto_delete` | `number` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendDocument", async (ctx) => {
  await client.sendDocument(
    "object_guid: string",
    "document: string | Buffer<ArrayBufferLike>",
    "caption: string",
    "reply_to_message_id: string",
    "auto_delete: number"
  );
});

client.run();
```

---