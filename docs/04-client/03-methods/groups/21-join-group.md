---
slug: /client/methods/join-group
id: learn-client-join-group-method
sidebar_position: 2
sidebar_label: متد joinGroup

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `joinGroup`

TODO: توضیحات مربوط به `joinGroup` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `link` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/joinGroup", async (ctx) => {
  await client.joinGroup(
    "link: string"
  );
});

client.run();
```

---