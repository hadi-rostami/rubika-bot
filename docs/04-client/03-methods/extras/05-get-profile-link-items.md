---
slug: /client/methods/get-profile-link-items
id: learn-client-get-profile-link-items-method
sidebar_position: 2
sidebar_label: متد getProfileLinkItems

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getProfileLinkItems`

TODO: توضیحات مربوط به `getProfileLinkItems` را وارد کنید.

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

client.command("/getProfileLinkItems", async (ctx) => {
  await client.getProfileLinkItems(
    "object_guid: string"
  );
});

client.run();
```

---