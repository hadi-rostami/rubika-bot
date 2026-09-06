---
slug: /client/methods/seen-chats
id: learn-client-seen-chats-method
sidebar_position: 2
sidebar_label: متد seenChats

last_update:
  date: "2026-09-06"
  author: "hadi-rostami"
---

# `seenChats`

TODO: توضیحات مربوط به `seenChats` را وارد کنید.

## ورودی‌ها

| نام         | نوع                     |
| ----------- | ----------------------- |
| `seen_list` | `Record<string, unknown>` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/seenChats", async (ctx) => {
  await client.seenChats("seen_list: Record<string, unknown>");
});

client.run();
```

---
