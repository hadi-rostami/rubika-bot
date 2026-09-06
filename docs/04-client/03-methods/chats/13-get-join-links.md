---
slug: /client/methods/get-join-links
id: learn-client-get-join-links-method
sidebar_position: 2
sidebar_label: متد getJoinLinks

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getJoinLinks`

TODO: توضیحات مربوط به `getJoinLinks` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getJoinLinks", async (ctx) => {
  await client.getJoinLinks(
    "object_guid: string"
  );
});

client.run();
```

---