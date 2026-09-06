---
slug: /client/methods/create-channel-voice-chat
id: learn-client-create-channel-voice-chat-method
sidebar_position: 2
sidebar_label: متد createChannelVoiceChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `createChannelVoiceChat`

TODO: توضیحات مربوط به `createChannelVoiceChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/createChannelVoiceChat", async (ctx) => {
  await client.createChannelVoiceChat(
    "channel_guid: string"
  );
});

client.run();
```

---