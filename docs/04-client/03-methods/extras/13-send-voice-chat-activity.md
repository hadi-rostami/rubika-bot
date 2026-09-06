---
slug: /client/methods/send-voice-chat-activity
id: learn-client-send-voice-chat-activity-method
sidebar_position: 2
sidebar_label: متد sendVoiceChatActivity

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendVoiceChatActivity`

TODO: توضیحات مربوط به `sendVoiceChatActivity` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `chat_guid` | `string` |
| `voice_chat_id` | `string` |
| `participant_object_guid` | `string` |
| `activity` | ["Speaking"](/docs/models#"speaking") _(اختیاری، پیش‌فرض: `"Speaking"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendVoiceChatActivity", async (ctx) => {
  await client.sendVoiceChatActivity(
    "chat_guid: string",
    "voice_chat_id: string",
    "participant_object_guid: string",
    "Speaking"
  );
});

client.run();
```

---