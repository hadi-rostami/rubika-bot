---
slug: /client/methods/edit-group-info
id: learn-client-edit-group-info-method
sidebar_position: 2
sidebar_label: متد editGroupInfo

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `editGroupInfo`

TODO: توضیحات مربوط به `editGroupInfo` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `title` | `string` _(اختیاری)_ |
| `description` | `string` _(اختیاری)_ |
| `slow_mode` | `string` _(اختیاری)_ |
| `event_messages` | `boolean` _(اختیاری)_ |
| `is_restricted_content` | `boolean` _(اختیاری)_ |
| `chat_reaction_setting` | `IN_CODES , null , undefined` _(اختیاری)_ |
| `chat_history_for_new_members` | `ChatHistoryOption` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/editGroupInfo", async (ctx) => {
  await client.editGroupInfo(
    "group_guid: string",
    "title: string",
    "description: string",
    "slow_mode: string",
    "event_messages: boolean",
    "is_restricted_content: boolean",
    "chat_reaction_setting: { [key: string]: string | number } | null | undefined",
    "chat_history_for_new_members: ChatHistoryOption"
  );
});

client.run();
```

---