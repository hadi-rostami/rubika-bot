---
slug: /client/methods/leave-group
id: learn-client-leave-group-method
sidebar_position: 2
sidebar_label: متد leaveGroup

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `leaveGroup`

TODO: توضیحات مربوط به `leaveGroup` را وارد کنید.

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

client.command("/leaveGroup", async (ctx) => {
  await client.leaveGroup(
    "group_guid: string"
  );
});

client.run();
```

---