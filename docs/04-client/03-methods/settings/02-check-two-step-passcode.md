---
slug: /client/methods/check-two-step-passcode
id: learn-client-check-two-step-passcode-method
sidebar_position: 2
sidebar_label: متد checkTwoStepPasscode

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `checkTwoStepPasscode`

TODO: توضیحات مربوط به `checkTwoStepPasscode` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `password` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/checkTwoStepPasscode", async (ctx) => {
  await client.checkTwoStepPasscode(
    "password: string"
  );
});

client.run();
```

---