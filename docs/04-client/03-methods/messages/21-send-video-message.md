---
slug: /client/methods/send-video-message
id: learn-client-send-video-message-method
sidebar_position: 2
sidebar_label: متد sendVideoMessage

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendVideoMessage`

TODO: توضیحات مربوط به `sendVideoMessage` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `video` | `string , Buffer<ArrayBufferLike>` |
| `reply_to_message_id` | `string` _(اختیاری)_ |
| `is_spoil` | `boolean` _(اختیاری)_ |
| `thumb` | `string , boolean` _(اختیاری)_ |
| `auto_delete` | `number` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendVideoMessage", async (ctx) => {
  await client.sendVideoMessage(
    "object_guid: string",
    "video: string | Buffer<ArrayBufferLike>",
    "reply_to_message_id: string",
    "is_spoil: boolean",
    "thumb: string | boolean",
    "auto_delete: number"
  );
});

client.run();
```

---