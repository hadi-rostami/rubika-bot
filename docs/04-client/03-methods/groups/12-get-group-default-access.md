---
slug: /client/methods/get-group-default-access
id: learn-client-get-group-default-access-method
sidebar_position: 2
sidebar_label: متد getGroupDefaultAccess

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupDefaultAccess`

TODO: توضیحات مربوط به `getGroupDefaultAccess` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getGroupDefaultAccess", async (ctx) => {
  await client.getGroupDefaultAccess(
    "group_guid: string"
  );
});

client.run();
```

---