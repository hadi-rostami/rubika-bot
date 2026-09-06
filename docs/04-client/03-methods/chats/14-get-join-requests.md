---
slug: /client/methods/get-join-requests
id: learn-client-get-join-requests-method
sidebar_position: 2
sidebar_label: متد getJoinRequests

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getJoinRequests`

TODO: توضیحات مربوط به `getJoinRequests` را وارد کنید.

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

client.command("/getJoinRequests", async (ctx) => {
  await client.getJoinRequests(
    "object_guid: string"
  );
});

client.run();
```

---