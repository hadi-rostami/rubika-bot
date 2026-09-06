---
slug: /client/methods/remove-join-link
id: learn-client-remove-join-link-method
sidebar_position: 2
sidebar_label: متد removeJoinLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `removeJoinLink`

TODO: توضیحات مربوط به `removeJoinLink` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `join_link` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/removeJoinLink", async (ctx) => {
  await client.removeJoinLink(
    "object_guid: string",
    "join_link: string"
  );
});

client.run();
```

---