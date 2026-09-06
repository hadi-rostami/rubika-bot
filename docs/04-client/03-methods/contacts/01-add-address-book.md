---
slug: /client/methods/add-address-book
id: learn-client-add-address-book-method
sidebar_position: 2
sidebar_label: متد addAddressBook

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `addAddressBook`

TODO: توضیحات مربوط به `addAddressBook` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `phone` | `string` |
| `first_name` | `string` |
| `last_name` | `string` _(اختیاری، پیش‌فرض: `""`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/addAddressBook", async (ctx) => {
  await client.addAddressBook(
    "phone: string",
    "first_name: string",
    "last_name: string"
  );
});

client.run();
```

---