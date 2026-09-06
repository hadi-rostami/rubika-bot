---
slug: /client/methods/builder
id: learn-client-builder-method
sidebar_position: 2
sidebar_label: متد builder

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `builder`

TODO: توضیحات مربوط به `builder` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `name` | `string` |
| `input` | `object` _(اختیاری، پیش‌فرض: `{}`)_ |
| `tmp_session` | `boolean` _(اختیاری، پیش‌فرض: `false`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/builder", async (ctx) => {
  await client.builder(
    "name: string",
    {},
    false,
  );
});

client.run();
```

---