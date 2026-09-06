---
slug: /client/methods/edit-join-link
id: learn-client-edit-join-link-method
sidebar_position: 2
sidebar_label: متد editJoinLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `editJoinLink`

TODO: توضیحات مربوط به `editJoinLink` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `join_link` | `string` |
| `title` | `string` _(اختیاری)_ |
| `request_needed` | `boolean` _(اختیاری)_ |
| `expire_time` | `number` _(اختیاری)_ |
| `usage_limit` | `number` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/editJoinLink", async (ctx) => {
  await client.editJoinLink(
    "object_guid: string",
    "join_link: string",
    "title: string",
    "request_needed: boolean",
    "expire_time: number",
    "usage_limit: number"
  );
});

client.run();
```

---