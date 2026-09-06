---
slug: /client/methods/send-gif
id: learn-client-send-gif-method
sidebar_position: 2
sidebar_label: متد sendGif

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendGif`

TODO: توضیحات مربوط به `sendGif` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `gif` | `string , Buffer<ArrayBufferLike>` |
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

client.command("/sendGif", async (ctx) => {
  await client.sendGif(
    "object_guid: string",
    "gif: string | Buffer<ArrayBufferLike>",
    "caption: string",
    "reply_to_message_id: string",
    "auto_delete: number"
  );
});

client.run();
```

---