---
slug: /client/methods/leave-group-voice-chat
id: learn-client-leave-group-voice-chat-method
sidebar_position: 2
sidebar_label: متد leaveGroupVoiceChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `leaveGroupVoiceChat`

TODO: توضیحات مربوط به `leaveGroupVoiceChat` را وارد کنید.

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

client.command("/leaveGroupVoiceChat", async (ctx) => {
  await client.leaveGroupVoiceChat(
    "group_guid: string",
    "voice_chat_id: string"
  );
});

client.run();
```

---