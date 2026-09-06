---
slug: /client/methods/get-stickers-by-emoji
id: learn-client-get-stickers-by-emoji-method
sidebar_position: 2
sidebar_label: متد getStickersByEmoji

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getStickersByEmoji`

TODO: توضیحات مربوط به `getStickersByEmoji` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `emoji` | `string` |
| `suggest_by` | `string` _(اختیاری، پیش‌فرض: `"All"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getStickersByEmoji", async (ctx) => {
  await client.getStickersByEmoji(
    "emoji: string",
    "All"
  );
});

client.run();
```

---