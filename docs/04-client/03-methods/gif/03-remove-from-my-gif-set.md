---
slug: /client/methods/remove-from-my-gif-set
id: learn-client-remove-from-my-gif-set-method
sidebar_position: 2
sidebar_label: متد removeFromMyGifSet

last_update:
  date: "2026-09-06"
  author: "hadi-rostami"
---

# `removeFromMyGifSet`

TODO: توضیحات مربوط به `removeFromMyGifSet` را وارد کنید.

## ورودی‌ها

| نام       | نوع      |
| --------- | -------- |
| `file_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/removeFromMyGifSet", async (ctx) => {
  await client.removeFromMyGifSet("file_id: string");
});

client.run();
```

---
