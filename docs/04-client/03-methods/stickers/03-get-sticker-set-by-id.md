---
slug: /client/methods/get-sticker-set-by-id
id: learn-client-get-sticker-set-by-id-method
sidebar_position: 2
sidebar_label: متد getStickerSetByID

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getStickerSetByID`

TODO: توضیحات مربوط به `getStickerSetByID` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `sticker_set_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getStickerSetByID", async (ctx) => {
  await client.getStickerSetByID(
    "sticker_set_id: string"
  );
});

client.run();
```

---