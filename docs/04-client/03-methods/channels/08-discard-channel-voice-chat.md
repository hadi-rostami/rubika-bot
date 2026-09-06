---
slug: /client/methods/discard-channel-voice-chat
id: learn-client-discard-channel-voice-chat-method
sidebar_position: 2
sidebar_label: متد discardChannelVoiceChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `discardChannelVoiceChat`

TODO: توضیحات مربوط به `discardChannelVoiceChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `voice_chat_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/discardChannelVoiceChat", async (ctx) => {
  await client.discardChannelVoiceChat(
    "channel_guid: string",
    "voice_chat_id: string"
  );
});

client.run();
```

---