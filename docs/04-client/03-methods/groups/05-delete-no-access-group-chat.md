---
slug: /client/methods/delete-no-access-group-chat
id: learn-client-delete-no-access-group-chat-method
sidebar_position: 2
sidebar_label: متد deleteNoAccessGroupChat

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `deleteNoAccessGroupChat`

TODO: توضیحات مربوط به `deleteNoAccessGroupChat` را وارد کنید.

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

client.command("/deleteNoAccessGroupChat", async (ctx) => {
  await client.deleteNoAccessGroupChat(
    "group_guid: string"
  );
});

client.run();
```

---