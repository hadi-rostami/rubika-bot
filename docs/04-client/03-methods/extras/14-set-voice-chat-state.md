---
slug: /client/methods/set-voice-chat-state
id: learn-client-set-voice-chat-state-method
sidebar_position: 2
sidebar_label: متد setVoiceChatState

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setVoiceChatState`

TODO: توضیحات مربوط به `setVoiceChatState` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `chat_guid` | `string` |
| `voice_chat_id` | `string` |
| `participant_object_guid` | `string` _(اختیاری)_ |
| `action` | `"Mute" | "Unmute"` _(اختیاری، پیش‌فرض: `"Unmute"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setVoiceChatState", async (ctx) => {
  await client.setVoiceChatState(
    "chat_guid: string",
    "voice_chat_id: string",
    "participant_object_guid: string",
    "Unmute"
  );
});

client.run();
```

---