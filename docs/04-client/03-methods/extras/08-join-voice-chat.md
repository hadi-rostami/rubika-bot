---
slug: /client/methods/join-voice-chat
id: learn-client-join-voice-chat-method
sidebar_position: 2
sidebar_label: متد joinVoiceChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `joinVoiceChat`

TODO: توضیحات مربوط به `joinVoiceChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `chat_guid` | `string` |
| `voice_chat_id` | `string` |
| `sdp_offer_data` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/joinVoiceChat", async (ctx) => {
  await client.joinVoiceChat(
    "chat_guid: string",
    "voice_chat_id: string",
    "sdp_offer_data: string"
  );
});

client.run();
```

---