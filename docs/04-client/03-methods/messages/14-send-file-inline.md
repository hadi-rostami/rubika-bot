---
slug: /client/methods/send-file-inline
id: learn-client-send-file-inline-method
sidebar_position: 2
sidebar_label: متد sendFileInline

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendFileInline`

TODO: توضیحات مربوط به `sendFileInline` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `file_inline` | [FileInline](/docs/models#fileinline) |
| `caption` | `string` _(اختیاری)_ |
| `reply_to_message_id` | `string` _(اختیاری)_ |
| `auto_delete` | `number` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendFileInline", async (ctx) => {
  await client.sendFileInline(
    "object_guid: string",
    "file_inline: FileInline",
    "caption: string",
    "reply_to_message_id: string",
    "auto_delete: number"
  );
});

client.run();
```

---