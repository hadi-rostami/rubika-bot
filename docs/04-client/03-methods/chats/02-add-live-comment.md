---
slug: /client/methods/add-live-comment
id: learn-client-add-live-comment-method
sidebar_position: 2
sidebar_label: متد addLiveComment

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `addLiveComment`

TODO: توضیحات مربوط به `addLiveComment` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `text` | `string` |
| `access_token` | `string` |
| `live_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/addLiveComment", async (ctx) => {
  await client.addLiveComment(
    "text: string",
    "access_token: string",
    "live_id: string"
  );
});

client.run();
```

---