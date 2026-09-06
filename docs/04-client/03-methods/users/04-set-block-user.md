---
slug: /client/methods/set-block-user
id: learn-client-set-block-user-method
sidebar_position: 2
sidebar_label: متد setBlockUser

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setBlockUser`

TODO: توضیحات مربوط به `setBlockUser` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `user_guid` | `string` |
| `action` | `"Block" , "Unblock"` _(اختیاری، پیش‌فرض: `"Block"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setBlockUser", async (ctx) => {
  await client.setBlockUser(
    "user_guid: string",
    "Block"
  );
});

client.run();
```

---