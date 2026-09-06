---
slug: /client/methods/get-suggested-folders
id: learn-client-get-suggested-folders-method
sidebar_position: 2
sidebar_label: متد getSuggestedFolders

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getSuggestedFolders`

TODO: توضیحات مربوط به `getSuggestedFolders` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| — | — | این متد پارامتری دریافت نمی‌کند. |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getSuggestedFolders", async (ctx) => {
  await client.getSuggestedFolders();
});

client.run();
```

---