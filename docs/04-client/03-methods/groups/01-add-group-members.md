---
slug: /client/methods/add-group-members
id: learn-client-add-group-members-method
sidebar_position: 2
sidebar_label: متد addGroupMembers

last_update:
  date: "2026-09-06"
  author: "hadi-rostami"
---

# `addGroupMembers`

TODO: توضیحات مربوط به `addGroupMembers` را وارد کنید.

## ورودی‌ها

| نام            | نوع      |
| -------------- | -------- | --------- |
| `group_guid`   | `string` |
| `member_guids` | `string  | string[]` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/addGroupMembers", async (ctx) => {
  await client.addGroupMembers(
    "group_guid: string",
    "member_guids: string | string[]",
  );
});

client.run();
```

---
