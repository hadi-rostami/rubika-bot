---
slug: /client/methods/remove-group
id: learn-client-remove-group-method
sidebar_position: 2
sidebar_label: متد removeGroup

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `removeGroup`

TODO: توضیحات مربوط به `removeGroup` را وارد کنید.

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

client.command("/removeGroup", async (ctx) => {
  await client.removeGroup(
    "group_guid: string"
  );
});

client.run();
```

---