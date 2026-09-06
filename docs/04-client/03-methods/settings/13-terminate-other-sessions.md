---
slug: /client/methods/terminate-other-sessions
id: learn-client-terminate-other-sessions-method
sidebar_position: 2
sidebar_label: متد terminateOtherSessions

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `terminateOtherSessions`

TODO: توضیحات مربوط به `terminateOtherSessions` را وارد کنید.

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

client.command("/terminateOtherSessions", async (ctx) => {
  await client.terminateOtherSessions(
    
  );
});

client.run();
```

---