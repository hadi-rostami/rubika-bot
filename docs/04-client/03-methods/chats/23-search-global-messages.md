---
slug: /client/methods/search-global-messages
id: learn-client-search-global-messages-method
sidebar_position: 2
sidebar_label: متد searchGlobalMessages

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `searchGlobalMessages`

TODO: توضیحات مربوط به `searchGlobalMessages` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `search_text` | `string` |
| `type` | `"Hashtag" | "Text"` _(اختیاری، پیش‌فرض: `"Text"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/searchGlobalMessages", async (ctx) => {
  await client.searchGlobalMessages(
    "search_text: string",
    "Text"
  );
});

client.run();
```

---