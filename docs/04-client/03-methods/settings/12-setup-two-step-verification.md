---
slug: /client/methods/setup-two-step-verification
id: learn-client-setup-two-step-verification-method
sidebar_position: 2
sidebar_label: متد setupTwoStepVerification

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setupTwoStepVerification`

TODO: توضیحات مربوط به `setupTwoStepVerification` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `password` | `string` |
| `hint` | `string` _(اختیاری)_ |
| `recovery_email` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setupTwoStepVerification", async (ctx) => {
  await client.setupTwoStepVerification(
    "password: string",
    "hint: string",
    "recovery_email: string"
  );
});

client.run();
```

---