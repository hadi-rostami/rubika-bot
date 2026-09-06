---
slug: /client/methods/download
id: learn-client-download-method
sidebar_position: 2
sidebar_label: متد download

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `download`

TODO: توضیحات مربوط به `download` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `file_inline` | [FileInline](/docs/models#fileinline) |
| `chunk` | `unknown` _(اختیاری، پیش‌فرض: `1054768`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/download", async (ctx) => {
  await client.download(
    "file_inline: FileInline",
    1054768
  );
});

client.run();
```

---