---
slug: /client/methods/get-privacy-setting
id: learn-client-get-privacy-setting-method
sidebar_position: 2
sidebar_label: متد getPrivacySetting

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getPrivacySetting`

TODO: توضیحات مربوط به `getPrivacySetting` را وارد کنید.

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

client.command("/getPrivacySetting", async (ctx) => {
  await client.getPrivacySetting();
});

client.run();
```

---