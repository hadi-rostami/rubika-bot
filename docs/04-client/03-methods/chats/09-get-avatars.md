---
slug: /client/methods/get-avatars
id: learn-client-get-avatars-method
sidebar_position: 2
sidebar_label: متد getAvatars

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getAvatars`

TODO: توضیحات مربوط به `getAvatars` را وارد کنید.

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

client.command("/getAvatars", async (ctx) => {
  await client.getAvatars(
    "object_guid: string"
  );
});

client.run();
```

---