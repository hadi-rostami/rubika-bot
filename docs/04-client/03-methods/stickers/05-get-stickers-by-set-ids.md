---
slug: /client/methods/get-stickers-by-set-ids
id: learn-client-get-stickers-by-set-ids-method
sidebar_position: 2
sidebar_label: متد getStickersBySetIds

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getStickersBySetIds`

TODO: توضیحات مربوط به `getStickersBySetIds` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `sticker_set_ids` | `string[]` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getStickersBySetIds", async (ctx) => {
  await client.getStickersBySetIds(
    "sticker_set_ids: string[]"
  );
});

client.run();
```

---