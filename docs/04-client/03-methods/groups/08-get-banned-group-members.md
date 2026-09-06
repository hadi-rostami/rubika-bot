---
slug: /client/methods/get-banned-group-members
id: learn-client-get-banned-group-members-method
sidebar_position: 2
sidebar_label: متد getBannedGroupMembers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getBannedGroupMembers`

TODO: توضیحات مربوط به `getBannedGroupMembers` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `start_id` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getBannedGroupMembers", async (ctx) => {
  await client.getBannedGroupMembers(
    "group_guid: string",
    "start_id: string"
  );
});

client.run();
```

---