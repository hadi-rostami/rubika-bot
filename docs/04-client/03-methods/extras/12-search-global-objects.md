---
slug: /client/methods/search-global-objects
id: learn-client-search-global-objects-method
sidebar_position: 2
sidebar_label: متد searchGlobalObjects

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `searchGlobalObjects`

TODO: توضیحات مربوط به `searchGlobalObjects` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `search_text` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/searchGlobalObjects", async (ctx) => {
  await client.searchGlobalObjects(
    "search_text: string"
  );
});

client.run();
```

---