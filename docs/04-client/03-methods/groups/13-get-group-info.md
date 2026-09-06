---
slug: /client/methods/get-group-info
id: learn-client-get-group-info-method
sidebar_position: 2
sidebar_label: متد getGroupInfo

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupInfo`

TODO: توضیحات مربوط به `getGroupInfo` را وارد کنید.

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

client.command("/getGroupInfo", async (ctx) => {
  await client.getGroupInfo(
    "group_guid: string"
  );
});

client.run();
```

---