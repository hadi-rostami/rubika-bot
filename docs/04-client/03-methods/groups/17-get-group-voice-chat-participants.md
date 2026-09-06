---
slug: /client/methods/get-group-voice-chat-participants
id: learn-client-get-group-voice-chat-participants-method
sidebar_position: 2
sidebar_label: متد getGroupVoiceChatParticipants

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupVoiceChatParticipants`

TODO: توضیحات مربوط به `getGroupVoiceChatParticipants` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `chat_guid` | `string` |
| `voice_chat_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getGroupVoiceChatParticipants", async (ctx) => {
  await client.getGroupVoiceChatParticipants(
    "chat_guid: string",
    "voice_chat_id: string"
  );
});

client.run();
```

---