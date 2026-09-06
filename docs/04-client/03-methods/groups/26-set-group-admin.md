---
slug: /client/methods/set-group-admin
id: learn-client-set-group-admin-method
sidebar_position: 2
sidebar_label: متد setGroupAdmin

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setGroupAdmin`

TODO: توضیحات مربوط به `setGroupAdmin` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `member_guid` | `string` |
| `action` | [ActionType](/docs/models#actiontype) |
| `access_list` | `AccessType[]` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setGroupAdmin", async (ctx) => {
  await client.setGroupAdmin(
    "group_guid: string",
    "member_guid: string",
    "action: ActionType",
    "access_list: AccessType[]"
  );
});

client.run();
```

---