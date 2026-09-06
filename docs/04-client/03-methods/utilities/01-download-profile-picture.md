---
slug: /client/methods/download-profile-picture
id: learn-client-download-profile-picture-method
sidebar_position: 2
sidebar_label: متد downloadProfilePicture

last_update:
  date: "2026-09-06"
  author: "hadi-rostami"
---

# `downloadProfilePicture`

TODO: توضیحات مربوط به `downloadProfilePicture` را وارد کنید.

## ورودی‌ها

| نام           | نوع      |
| ------------- | -------- |
| `object_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/downloadProfilePicture", async (ctx) => {
  await client.downloadProfilePicture("object_guid: string");
});

client.run();
```

---
