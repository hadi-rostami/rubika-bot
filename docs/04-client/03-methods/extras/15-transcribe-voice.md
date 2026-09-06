---
slug: /client/methods/transcribe-voice
id: learn-client-transcribe-voice-method
sidebar_position: 2
sidebar_label: متد transcribeVoice

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `transcribeVoice`

TODO: توضیحات مربوط به `transcribeVoice` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/transcribeVoice", async (ctx) => {
  await client.transcribeVoice(
    "object_guid: string",
    "message_id: string"
  );
});

client.run();
```

---