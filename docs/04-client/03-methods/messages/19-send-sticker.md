---
slug: /client/methods/send-sticker
id: learn-client-send-sticker-method
sidebar_position: 2
sidebar_label: متد sendSticker

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendSticker`

TODO: توضیحات مربوط به `sendSticker` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| — | — | این متد پارامتری دریافت نمی‌کند. |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendSticker", async (ctx) => {
  await client.sendSticker(
    
  );
});

client.run();
```

---