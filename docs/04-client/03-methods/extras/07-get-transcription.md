---
slug: /client/methods/get-transcription
id: learn-client-get-transcription-method
sidebar_position: 2
sidebar_label: متد getTranscription

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getTranscription`

TODO: توضیحات مربوط به `getTranscription` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `message_id` | `string` |
| `transcription_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getTranscription", async (ctx) => {
  await client.getTranscription(
    "message_id: string",
    "transcription_id: string"
  );
});

client.run();
```

---