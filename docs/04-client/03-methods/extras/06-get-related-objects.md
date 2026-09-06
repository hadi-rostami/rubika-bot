---
slug: /client/methods/get-related-objects
id: learn-client-get-related-objects-method
sidebar_position: 2
sidebar_label: متد getRelatedObjects

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getRelatedObjects`

TODO: توضیحات مربوط به `getRelatedObjects` را وارد کنید.

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

client.command("/getRelatedObjects", async (ctx) => {
  await client.getRelatedObjects(
    "object_guid: string"
  );
});

client.run();
```

---