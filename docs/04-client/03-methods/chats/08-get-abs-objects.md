---
slug: /client/methods/get-abs-objects
id: learn-client-get-abs-objects-method
sidebar_position: 2
sidebar_label: متد getAbsObjects

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getAbsObjects`

TODO: توضیحات مربوط به `getAbsObjects` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guids` | `string[]` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getAbsObjects", async (ctx) => {
  await client.getAbsObjects(
    "object_guids: string[]"
  );
});

client.run();
```

---