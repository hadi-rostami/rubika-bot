---
slug: /client/methods/get-my-sticker-sets
id: learn-client-get-my-sticker-sets-method
sidebar_position: 2
sidebar_label: متد getMyStickerSets

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getMyStickerSets`

TODO: توضیحات مربوط به `getMyStickerSets` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| — | — |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getMyStickerSets", async (ctx) => {
  await client.getMyStickerSets(
    
  );
});

client.run();
```

---