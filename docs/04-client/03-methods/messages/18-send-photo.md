---
slug: /client/methods/send-photo
id: learn-client-send-photo-method
sidebar_position: 2
sidebar_label: متد sendPhoto

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendPhoto`

TODO: توضیحات مربوط به `sendPhoto` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `photo` | `Buffer<ArrayBufferLike> , string` |
| `text` | `string` _(اختیاری)_ |
| `reply_id` | `string` _(اختیاری)_ |
| `is_spoil` | `boolean` _(اختیاری)_ |
| `auto_delete` | `number` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendPhoto", async (ctx) => {
  await client.sendPhoto(
    "object_guid: string",
    "photo: Buffer<ArrayBufferLike> | string",
    "text: string",
    "reply_id: string",
    "is_spoil: boolean",
    "auto_delete: number"
  );
});

client.run();
```

---