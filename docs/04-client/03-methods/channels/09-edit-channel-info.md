---
slug: /client/methods/edit-channel-info
id: learn-client-edit-channel-info-method
sidebar_position: 2
sidebar_label: متد editChannelInfo

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `editChannelInfo`

TODO: توضیحات مربوط به `editChannelInfo` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `title` | `string` _(اختیاری)_ |
| `description` | `string` _(اختیاری)_ |
| `channel_type` | `string` _(اختیاری)_ |
| `sign_messages` | `boolean` _(اختیاری)_ |
| `is_restricted_content` | `boolean` _(اختیاری)_ |
| `chat_reaction_setting` | `object` _(اختیاری)_ |
| `chat_history_for_new_members` | [ChatHistory](/docs/models#chathistory) _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/editChannelInfo", async (ctx) => {
  await client.editChannelInfo(
    "channel_guid: string",
    "title: string",
    "description: string",
    "channel_type: string",
    "sign_messages: boolean",
    "is_restricted_content: boolean",
    "chat_reaction_setting: object",
    "chat_history_for_new_members: ChatHistory"
  );
});

client.run();
```

---