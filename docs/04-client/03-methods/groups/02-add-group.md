---
slug: /client/methods/add-group
id: learn-client-add-group-method
sidebar_position: 2
sidebar_label: متد addGroup

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `addGroup`

TODO: توضیحات مربوط به `addGroup` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `title` | `string` |
| `member_guids` | `string , string[]` |
| `description` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/addGroup", async (ctx) => {
  await client.addGroup(
    "title: string",
    "member_guids: string | string[]",
    "description: string"
  );
});

client.run();
```

---