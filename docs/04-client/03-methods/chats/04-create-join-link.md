---
slug: /client/methods/create-join-link
id: learn-client-create-join-link-method
sidebar_position: 2
sidebar_label: متد createJoinLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `createJoinLink`

TODO: توضیحات مربوط به `createJoinLink` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `title` | `string` |
| `request_needed` | `boolean` |
| `usage_limit` | `number` |
| `expire_time` | `number` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/createJoinLink", async (ctx) => {
  await client.createJoinLink(
    "object_guid: string",
    "title: string",
    "request_needed: boolean",
    "usage_limit: number",
    "expire_time: number"
  );
});

client.run();
```

---