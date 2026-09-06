---
slug: /client/methods/get-two-passcode-status
id: learn-client-get-two-passcode-status-method
sidebar_position: 2
sidebar_label: متد getTwoPasscodeStatus

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getTwoPasscodeStatus`

TODO: توضیحات مربوط به `getTwoPasscodeStatus` را وارد کنید.

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

client.command("/getTwoPasscodeStatus", async (ctx) => {
  await client.getTwoPasscodeStatus();
});

client.run();
```

---