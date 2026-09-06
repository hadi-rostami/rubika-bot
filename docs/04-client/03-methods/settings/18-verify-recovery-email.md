---
slug: /client/methods/verify-recovery-email
id: learn-client-verify-recovery-email-method
sidebar_position: 2
sidebar_label: متد verifyRecoveryEmail

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `verifyRecoveryEmail`

TODO: توضیحات مربوط به `verifyRecoveryEmail` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `password` | `string` |
| `code` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/verifyRecoveryEmail", async (ctx) => {
  await client.verifyRecoveryEmail(
    "password: string",
    "code: string"
  );
});

client.run();
```

---