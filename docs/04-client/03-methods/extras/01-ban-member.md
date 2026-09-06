---
slug: /client/methods/ban-member
id: learn-client-ban-member-method
sidebar_position: 2
sidebar_label: متد banMember

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `banMember`

TODO: توضیحات مربوط به `banMember` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `member_guid` | `string` |
| `action` | `"Set" | "Unset"` _(اختیاری، پیش‌فرض: `"Set"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/banMember", async (ctx) => {
  await client.banMember(
    "object_guid: string",
    "member_guid: string",
    "action : "Set" | "Unset""
  );
});

client.run();
```

---