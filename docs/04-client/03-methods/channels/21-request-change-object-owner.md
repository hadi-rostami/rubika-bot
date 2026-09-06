---
slug: /client/methods/request-change-object-owner
id: learn-client-request-change-object-owner-method
sidebar_position: 2
sidebar_label: متد requestChangeObjectOwner

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `requestChangeObjectOwner`

TODO: توضیحات مربوط به `requestChangeObjectOwner` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `new_owner_user_guid` | `string` |
| `object_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/requestChangeObjectOwner", async (ctx) => {
  await client.requestChangeObjectOwner(
    "new_owner_user_guid: string",
    "object_guid: string"
  );
});

client.run();
```

---