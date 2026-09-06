---
slug: /client/methods/user-is-admin
id: learn-client-user-is-admin-method
sidebar_position: 2
sidebar_label: متد userIsAdmin

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `userIsAdmin`

TODO: توضیحات مربوط به `userIsAdmin` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `user_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/userIsAdmin", async (ctx) => {
  await client.userIsAdmin(
    "object_guid: string",
    "user_guid: string"
  );
});

client.run();
```

---