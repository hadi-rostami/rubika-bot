---
slug: /client/methods/action-on-sticker-set
id: learn-client-action-on-sticker-set-method
sidebar_position: 2
sidebar_label: متد actionOnStickerSet

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `actionOnStickerSet`

TODO: توضیحات مربوط به `actionOnStickerSet` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `sticker_set_id` | `string` |
| `action` | `"Add" , "Remove"` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/actionOnStickerSet", async (ctx) => {
  await client.actionOnStickerSet(
    "sticker_set_id: string",
    "action: "Add" | "Remove""
  );
});

client.run();
```

---