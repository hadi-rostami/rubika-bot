---
slug: /client/methods/discard-group-voice-chat
id: learn-client-discard-group-voice-chat-method
sidebar_position: 2
sidebar_label: متد discardGroupVoiceChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `discardGroupVoiceChat`

TODO: توضیحات مربوط به `discardGroupVoiceChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `voice_chat_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/discardGroupVoiceChat", async (ctx) => {
  await client.discardGroupVoiceChat(
    "group_guid: string",
    "voice_chat_id: string"
  );
});

client.run();
```

---