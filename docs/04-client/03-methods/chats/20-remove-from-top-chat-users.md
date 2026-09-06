---
slug: /client/methods/remove-from-top-chat-users
id: learn-client-remove-from-top-chat-users-method
sidebar_position: 2
sidebar_label: متد removeFromTopChatUsers

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `removeFromTopChatUsers`

TODO: توضیحات مربوط به `removeFromTopChatUsers` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `user_guid` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/removeFromTopChatUsers", async (ctx) => {
  await client.removeFromTopChatUsers(
    "user_guid: string"
  );
});

client.run();
```

---