---
slug: /client/methods/delete-messages
id: learn-client-delete-messages-method
sidebar_position: 2
sidebar_label: متد deleteMessages

last_update:
  date: "2026-09-06"
  author: "hadi-rostami"
---

# `deleteMessages`

TODO: توضیحات مربوط به `deleteMessages` را وارد کنید.

## ورودی‌ها

| نام           | نوع                                                   |
| ------------- | ----------------------------------------------------- |
| `object_guid` | `string`                                              |
| `message_ids` | `string , string[]`                                   |
| `type`        | `"Global" , "Local"` _(اختیاری، پیش‌فرض: `"Global"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/deleteMessages", async (ctx) => {
  await client.deleteMessages(
    "object_guid: string",
    "message_ids: string | string[]",
    "Global",
  );
});

client.run();
```

---
