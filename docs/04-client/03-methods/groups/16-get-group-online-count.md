---
slug: /client/methods/get-group-online-count
id: learn-client-get-group-online-count-method
sidebar_position: 2
sidebar_label: متد getGroupOnlineCount

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupOnlineCount`

TODO: توضیحات مربوط به `getGroupOnlineCount` را وارد کنید.

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

client.command("/getGroupOnlineCount", async (ctx) => {
  await client.getGroupOnlineCount(
    "group_guid: string"
  );
});

client.run();
```

---