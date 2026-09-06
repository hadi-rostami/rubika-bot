---
slug: /client/methods/delete-messageby-count
id: learn-client-delete-messageby-count-method
sidebar_position: 2
sidebar_label: متد deleteMessagebyCount

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `deleteMessagebyCount`

TODO: توضیحات مربوط به `deleteMessagebyCount` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `message_id` | `string` |
| `count` | `number` |
| `sort` | `"FromMin" | "FromMax"` _(اختیاری، پیش‌فرض: `"FromMax"`)_ |
| `filter_type` | `| "Music" | "File" | "Media" | "Voice" | "Gif" | "Groups" | "Channels"` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/deleteMessagebyCount", async (ctx) => {
  await client.deleteMessagebyCount(
    "object_guid: string",
    "message_id: string",
    "count: number",
    "FromMax",
    "filter_type: | "Music" | "File" | "Media" | "Voice" | "Gif" | "Groups" | "Channels""
  );
});

client.run();
```

---