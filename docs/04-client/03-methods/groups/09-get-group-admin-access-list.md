---
slug: /client/methods/get-group-admin-access-list
id: learn-client-get-group-admin-access-list-method
sidebar_position: 2
sidebar_label: متد getGroupAdminAccessList

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupAdminAccessList`

TODO: توضیحات مربوط به `getGroupAdminAccessList` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `member_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getGroupAdminAccessList", async (ctx) => {
  await client.getGroupAdminAccessList(
    "group_guid: string",
    "member_guid: string"
  );
});

client.run();
```

---