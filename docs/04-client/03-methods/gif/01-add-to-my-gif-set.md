---
slug: /client/methods/add-to-my-gif-set
id: learn-client-add-to-my-gif-set-method
sidebar_position: 2
sidebar_label: متد addToMyGifSet

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `addToMyGifSet`

TODO: توضیحات مربوط به `addToMyGifSet` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/addToMyGifSet", async (ctx) => {
  await client.addToMyGifSet(
    "object_guid: string",
    "message_id: string"
  );
});

client.run();
```

---