---
slug: /client/methods/create-group-voice-chat
id: learn-client-create-group-voice-chat-method
sidebar_position: 2
sidebar_label: متد createGroupVoiceChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `createGroupVoiceChat`

TODO: توضیحات مربوط به `createGroupVoiceChat` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `chat_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/createGroupVoiceChat", async (ctx) => {
  await client.createGroupVoiceChat(
    "chat_guid: string"
  );
});

client.run();
```

---