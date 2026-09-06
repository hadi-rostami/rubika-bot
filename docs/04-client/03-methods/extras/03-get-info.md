---
slug: /client/methods/get-info
id: learn-client-get-info-method
sidebar_position: 2
sidebar_label: متد getInfo

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getInfo`

TODO: توضیحات مربوط به `getInfo` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` _(اختیاری)_ |
| `username` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getInfo", async (ctx) => {
  await client.getInfo(
    "object_guid: string",
    "username: string"
  );
});

client.run();
```

---