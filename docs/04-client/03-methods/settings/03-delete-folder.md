---
slug: /client/methods/delete-folder
id: learn-client-delete-folder-method
sidebar_position: 2
sidebar_label: متد deleteFolder

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `deleteFolder`

TODO: توضیحات مربوط به `deleteFolder` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `folder_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/deleteFolder", async (ctx) => {
  await client.deleteFolder(
    "folder_id: string"
  );
});

client.run();
```

---