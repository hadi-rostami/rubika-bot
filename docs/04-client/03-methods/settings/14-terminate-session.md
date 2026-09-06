---
slug: /client/methods/terminate-session
id: learn-client-terminate-session-method
sidebar_position: 2
sidebar_label: متد terminateSession

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `terminateSession`

TODO: توضیحات مربوط به `terminateSession` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `session_key` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/terminateSession", async (ctx) => {
  await client.terminateSession(
    "session_key: string"
  );
});

client.run();
```

---