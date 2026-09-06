---
slug: /client/methods/get-messages
id: learn-client-get-messages-method
sidebar_position: 2
sidebar_label: متد getMessages

last_update:
  date: "2026-09-06"
  author: "hadi-rostami"
---

# `getMessages`

TODO: توضیحات مربوط به `getMessages` را وارد کنید.

## ورودی‌ها

| نام           | نوع                                                                                |
| ------------- | ---------------------------------------------------------------------------------- |
| `object_guid` | `string`                                                                           |
| `max_id`      | `string`                                                                           |
| `limit`       | `string`                                                                           |
| `sort`        | `"FromMin" , "FromMax"` _(اختیاری، پیش‌فرض: `"FromMax"`)_                          |
| `filter_type` | `"Music" , "File" , "Media" , "Voice" , "Gif" , "Groups" , "Channels"` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getMessages", async (ctx) => {
  await client.getMessages(
    "object_guid: string",
    "max_id: string",
    "limit: string",
    "FromMax",
    "filter_type: | "Music" | "File" | "Media" | "Voice" | "Gif" | "Groups" | "Channels""
  );
});

client.run();
```

---
