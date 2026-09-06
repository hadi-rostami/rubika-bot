---
slug: /client/methods/get-link-from-app-url
id: learn-client-get-link-from-app-url-method
sidebar_position: 2
sidebar_label: متد getLinkFromAppUrl

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getLinkFromAppUrl`

TODO: توضیحات مربوط به `getLinkFromAppUrl` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `app_url` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getLinkFromAppUrl", async (ctx) => {
  await client.getLinkFromAppUrl(
    "app_url: string"
  );
});

client.run();
```

---