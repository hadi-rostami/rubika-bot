---
slug: /client/methods/set-group-link
id: learn-client-set-group-link-method
sidebar_position: 2
sidebar_label: متد setGroupLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setGroupLink`

TODO: توضیحات مربوط به `setGroupLink` را وارد کنید.

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

client.command("/setGroupLink", async (ctx) => {
  await client.setGroupLink(
    "group_guid: string"
  );
});

client.run();
```

---