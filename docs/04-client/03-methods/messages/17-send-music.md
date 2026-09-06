---
slug: /client/methods/send-music
id: learn-client-send-music-method
sidebar_position: 2
sidebar_label: متد sendMusic

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendMusic`

TODO: توضیحات مربوط به `sendMusic` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `music` | `string , Buffer<ArrayBufferLike>` |
| `caption` | `string` _(اختیاری)_ |
| `reply_to_message_id` | `string` _(اختیاری)_ |
| `is_spoil` | `boolean` _(اختیاری)_ |
| `audio_info` | `boolean` _(اختیاری)_ |
| `auto_delete` | `number` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendMusic", async (ctx) => {
  await client.sendMusic(
    "object_guid: string",
    "music: string | Buffer<ArrayBufferLike>",
    "caption: string",
    "reply_to_message_id: string",
    "is_spoil: boolean",
    "audio_info: boolean",
    "auto_delete: number"
  );
});

client.run();
```

---