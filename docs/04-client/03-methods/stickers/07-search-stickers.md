---
slug: /client/methods/search-stickers
id: learn-client-search-stickers-method
sidebar_position: 2
sidebar_label: متد searchStickers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `searchStickers`

TODO: توضیحات مربوط به `searchStickers` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `search_text` | `string` |
| `start_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/searchStickers", async (ctx) => {
  await client.searchStickers(
    "search_text: string",
    "start_id: string"
  );
});

client.run();
```

---