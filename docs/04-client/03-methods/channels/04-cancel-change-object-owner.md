---
slug: /client/methods/cancel-change-object-owner
id: learn-client-cancel-change-object-owner-method
sidebar_position: 2
sidebar_label: متد cancelChangeObjectOwner

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `cancelChangeObjectOwner`

TODO: توضیحات مربوط به `cancelChangeObjectOwner` را وارد کنید.

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

client.command("/cancelChangeObjectOwner", async (ctx) => {
  await client.cancelChangeObjectOwner(
    "object_guid: string"
  );
});

client.run();
```

---