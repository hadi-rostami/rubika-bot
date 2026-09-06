---
slug: /client/methods/add-channel-members
id: learn-client-add-channel-members-method
sidebar_position: 2
sidebar_label: متد addChannelMembers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `addChannelMembers`

TODO: توضیحات مربوط به `addChannelMembers` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `member_guids` | `string[] | string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/addChannelMembers", async (ctx) => {
  await client.addChannelMembers(
    "channel_guid: string",
    "member_guids: string[] | string"
  );
});

client.run();
```

---