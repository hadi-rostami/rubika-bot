---
slug: /client/methods/get-channel-admin-access-list
id: learn-client-get-channel-admin-access-list-method
sidebar_position: 2
sidebar_label: متد getChannelAdminAccessList

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getChannelAdminAccessList`

TODO: توضیحات مربوط به `getChannelAdminAccessList` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `member_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getChannelAdminAccessList", async (ctx) => {
  await client.getChannelAdminAccessList(
    "channel_guid: string",
    "member_guid: string"
  );
});

client.run();
```

---