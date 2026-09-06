---
slug: /client/methods/get-trend-sticker-sets
id: learn-client-get-trend-sticker-sets-method
sidebar_position: 2
sidebar_label: متد getTrendStickerSets

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getTrendStickerSets`

TODO: توضیحات مربوط به `getTrendStickerSets` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `start_id` | `string , null` _(اختیاری، پیش‌فرض: `null`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getTrendStickerSets", async (ctx) => {
  await client.getTrendStickerSets(
    null
  );
});

client.run();
```

---