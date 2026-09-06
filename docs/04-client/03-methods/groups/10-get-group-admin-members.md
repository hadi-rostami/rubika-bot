---
slug: /client/methods/get-group-admin-members
id: learn-client-get-group-admin-members-method
sidebar_position: 2
sidebar_label: متد getGroupAdminMembers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupAdminMembers`

TODO: توضیحات مربوط به `getGroupAdminMembers` را وارد کنید.

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

client.command("/getGroupAdminMembers", async (ctx) => {
  await client.getGroupAdminMembers(
    "group_guid: string",
    "start_id: string"
  );
});

client.run();
```

---