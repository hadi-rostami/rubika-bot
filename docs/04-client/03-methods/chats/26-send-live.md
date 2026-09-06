---
slug: /client/methods/send-live
id: learn-client-send-live-method
sidebar_position: 2
sidebar_label: متد sendLive

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendLive`

TODO: توضیحات مربوط به `sendLive` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `title` | `string` |
| `object_guid` | `string` |
| `image` | `string` |
| `device_type` | `unknown` _(اختیاری، پیش‌فرض: `"Software"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendLive", async (ctx) => {
  await client.sendLive(
    "title: string",
    "object_guid: string",
    "image: string",
    "Software"
  );
});

client.run();
```

---