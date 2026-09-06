---
slug: /client/methods/get-group-all-members
id: learn-client-get-group-all-members-method
sidebar_position: 2
sidebar_label: متد getGroupAllMembers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupAllMembers`

TODO: توضیحات مربوط به `getGroupAllMembers` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `search_text` | `string` _(اختیاری)_ |
| `start_id` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getGroupAllMembers", async (ctx) => {
  await client.getGroupAllMembers(
    "group_guid: string",
    "search_text: string",
    "start_id: string"
  );
});

client.run();
```

---