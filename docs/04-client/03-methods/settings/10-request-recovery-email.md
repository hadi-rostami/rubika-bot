---
slug: /client/methods/request-recovery-email
id: learn-client-request-recovery-email-method
sidebar_position: 2
sidebar_label: متد requestRecoveryEmail

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `requestRecoveryEmail`

TODO: توضیحات مربوط به `requestRecoveryEmail` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `password` | `string` |
| `recovery_email` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/requestRecoveryEmail", async (ctx) => {
  await client.requestRecoveryEmail(
    "password: string",
    "recovery_email: string"
  );
});

client.run();
```

---