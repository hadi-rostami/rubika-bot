---
slug: /client/methods/get-channel-admin-members
id: learn-client-get-channel-admin-members-method
sidebar_position: 2
sidebar_label: متد getChannelAdminMembers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getChannelAdminMembers`

TODO: توضیحات مربوط به `getChannelAdminMembers` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `start_id` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getChannelAdminMembers", async (ctx) => {
  await client.getChannelAdminMembers(
    "channel_guid: string",
    "start_id: string"
  );
});

client.run();
```

---