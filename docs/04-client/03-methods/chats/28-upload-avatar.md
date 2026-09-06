---
slug: /client/methods/upload-avatar
id: learn-client-upload-avatar-method
sidebar_position: 2
sidebar_label: متد uploadAvatar

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `uploadAvatar`

TODO: توضیحات مربوط به `uploadAvatar` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `image` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/uploadAvatar", async (ctx) => {
  await client.uploadAvatar(
    "object_guid: string",
    "image: string"
  );
});

client.run();
```

---