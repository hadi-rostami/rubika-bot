---
slug: /client/methods/set-channel-voice-chat-setting
id: learn-client-set-channel-voice-chat-setting-method
sidebar_position: 2
sidebar_label: متد setChannelVoiceChatSetting

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setChannelVoiceChatSetting`

TODO: توضیحات مربوط به `setChannelVoiceChatSetting` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `voice_chat_id` | `string` |
| `title` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setChannelVoiceChatSetting", async (ctx) => {
  await client.setChannelVoiceChatSetting(
    "channel_guid: string",
    "voice_chat_id: string",
    "title: string"
  );
});

client.run();
```

---