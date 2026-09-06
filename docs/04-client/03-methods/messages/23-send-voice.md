---
slug: /client/methods/send-voice
id: learn-client-send-voice-method
sidebar_position: 2
sidebar_label: متد sendVoice

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendVoice`

TODO: توضیحات مربوط به `sendVoice` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `voice` | `string , Buffer<ArrayBufferLike>` |
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

client.command("/sendVoice", async (ctx) => {
  await client.sendVoice(
    "object_guid: string",
    "voice: string | Buffer<ArrayBufferLike>",
    "caption: string",
    "reply_to_message_id: string",
    "auto_delete: number"
  );
});

client.run();
```

---