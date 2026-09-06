---
slug: /client/methods/set-group-default-access
id: learn-client-set-group-default-access-method
sidebar_position: 2
sidebar_label: متد setGroupDefaultAccess

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setGroupDefaultAccess`

TODO: توضیحات مربوط به `setGroupDefaultAccess` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `access_list` | `AccessType[]` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setGroupDefaultAccess", async (ctx) => {
  await client.setGroupDefaultAccess(
    "group_guid: string",
    "access_list: AccessType[]"
  );
});

client.run();
```

---