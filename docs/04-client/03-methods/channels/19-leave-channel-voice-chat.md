---
slug: /client/methods/leave-channel-voice-chat
id: learn-client-leave-channel-voice-chat-method
sidebar_position: 2
sidebar_label: متد leaveChannelVoiceChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `leaveChannelVoiceChat`

TODO: توضیحات مربوط به `leaveChannelVoiceChat` را وارد کنید.

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

client.command("/leaveChannelVoiceChat", async (ctx) => {
  await client.leaveChannelVoiceChat(
    "channel_guid: string",
    "voice_chat_id: string"
  );
});

client.run();
```

---