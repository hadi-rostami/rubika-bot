---
slug: /client/methods/get-my-gif-set
id: learn-client-get-my-gif-set-method
sidebar_position: 2
sidebar_label: متد getMyGifSet

last_update:
  date: "2026-09-06"
  author: "hadi-rostami"
---

# `getMyGifSet`

TODO: توضیحات مربوط به `getMyGifSet` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| —   | —   |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getMyGifSet", async (ctx) => {
  await client.getMyGifSet();
});

client.run();
```

---
