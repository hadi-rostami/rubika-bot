---
slug: /client/methods/get-group-voice-chat-updates
id: learn-client-get-group-voice-chat-updates-method
sidebar_position: 2
sidebar_label: متد getGroupVoiceChatUpdates

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupVoiceChatUpdates`

TODO: توضیحات مربوط به `getGroupVoiceChatUpdates` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `voice_chat_id` | `string` |
| `state` | `number` _(اختیاری، پیش‌فرض: `Math.round(Date.now() / 1000) - 150`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getGroupVoiceChatUpdates", async (ctx) => {
  await client.getGroupVoiceChatUpdates(
    "group_guid: string",
    "voice_chat_id: string",
    Math.round(Date.now() / 1000) - 150
  );
});

client.run();
```

---