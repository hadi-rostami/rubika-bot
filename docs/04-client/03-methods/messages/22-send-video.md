---
slug: /client/methods/send-video
id: learn-client-send-video-method
sidebar_position: 2
sidebar_label: متد sendVideo

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendVideo`

TODO: توضیحات مربوط به `sendVideo` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `video` | `string , Buffer<ArrayBufferLike>` |
| `caption` | `string` _(اختیاری)_ |
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

client.command("/sendVideo", async (ctx) => {
  await client.sendVideo(
    "object_guid: string",
    "video: string | Buffer<ArrayBufferLike>",
    "caption: string",
    "reply_to_message_id: string",
    "is_spoil: boolean",
    "thumb: string | boolean",
    "auto_delete: number"
  );
});

client.run();
```

---