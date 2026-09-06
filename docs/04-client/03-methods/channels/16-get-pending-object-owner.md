---
slug: /client/methods/get-pending-object-owner
id: learn-client-get-pending-object-owner-method
sidebar_position: 2
sidebar_label: متد getPendingObjectOwner

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getPendingObjectOwner`

TODO: توضیحات مربوط به `getPendingObjectOwner` را وارد کنید.

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

client.command("/getPendingObjectOwner", async (ctx) => {
  await client.getPendingObjectOwner(
    "object_guid: string"
  );
});

client.run();
```

---