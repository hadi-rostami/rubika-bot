---
slug: /client/methods/delete-avatar
id: learn-client-delete-avatar-method
sidebar_position: 2
sidebar_label: متد deleteAvatar

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `deleteAvatar`

TODO: توضیحات مربوط به `deleteAvatar` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `avatar_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/deleteAvatar", async (ctx) => {
  await client.deleteAvatar(
    "object_guid: string",
    "avatar_id: string"
  );
});

client.run();
```

---