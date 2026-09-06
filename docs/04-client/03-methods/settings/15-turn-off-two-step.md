---
slug: /client/methods/turn-off-two-step
id: learn-client-turn-off-two-step-method
sidebar_position: 2
sidebar_label: متد turnOffTwoStep

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `turnOffTwoStep`

TODO: توضیحات مربوط به `turnOffTwoStep` را وارد کنید.

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

client.command("/turnOffTwoStep", async (ctx) => {
  await client.turnOffTwoStep(
    "password: string"
  );
});

client.run();
```

---