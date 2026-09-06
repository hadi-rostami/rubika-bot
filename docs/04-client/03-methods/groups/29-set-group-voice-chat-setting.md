---
slug: /client/methods/set-group-voice-chat-setting
id: learn-client-set-group-voice-chat-setting-method
sidebar_position: 2
sidebar_label: متد setGroupVoiceChatSetting

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setGroupVoiceChatSetting`

TODO: توضیحات مربوط به `setGroupVoiceChatSetting` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `voice_chat_id` | `string` |
| `title` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setGroupVoiceChatSetting", async (ctx) => {
  await client.setGroupVoiceChatSetting(
    "group_guid: string",
    "voice_chat_id: string",
    "title: string"
  );
});

client.run();
```

---