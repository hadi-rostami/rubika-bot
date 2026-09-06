---
slug: /client/methods/add-channel
id: learn-client-add-channel-method
sidebar_position: 2
sidebar_label: متد addChannel

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `addChannel`

TODO: توضیحات مربوط به `addChannel` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `title` | `string` |
| `description` | `string` _(اختیاری)_ |
| `member_guids` | `string[]` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/addChannel", async (ctx) => {
  await client.addChannel(
    "title: string",
    "description: string",
    "member_guids: string[]"
  );
});

client.run();
```

---