---
slug: /client/methods/get-group-link
id: learn-client-get-group-link-method
sidebar_position: 2
sidebar_label: متد getGroupLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupLink`

TODO: توضیحات مربوط به `getGroupLink` را وارد کنید.

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

client.command("/getGroupLink", async (ctx) => {
  await client.getGroupLink(
    "group_guid: string"
  );
});

client.run();
```

---