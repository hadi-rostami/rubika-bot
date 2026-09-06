---
slug: /client/methods/join-group-voice-chat
id: learn-client-join-group-voice-chat-method
sidebar_position: 2
sidebar_label: متد joinGroupVoiceChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `joinGroupVoiceChat`

TODO: توضیحات مربوط به `joinGroupVoiceChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `chat_guid` | `string` |
| `voice_chat_id` | `string` |
| `sdp_offer_data` | `string` |
| `self_object_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/joinGroupVoiceChat", async (ctx) => {
  await client.joinGroupVoiceChat(
    "chat_guid: string",
    "voice_chat_id: string",
    "sdp_offer_data: string",
    "self_object_guid: string"
  );
});

client.run();
```

---