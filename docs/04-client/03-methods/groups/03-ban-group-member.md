---
slug: /client/methods/ban-group-member
id: learn-client-ban-group-member-method
sidebar_position: 2
sidebar_label: متد banGroupMember

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `banGroupMember`

TODO: توضیحات مربوط به `banGroupMember` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `member_guid` | `string` |
| `action` | `"Set" | "Unset"` _(اختیاری، پیش‌فرض: `"Set"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/banGroupMember", async (ctx) => {
  await client.banGroupMember(
    "group_guid: string",
    "member_guid: string",
    "Set"
  );
});

client.run();
```

---