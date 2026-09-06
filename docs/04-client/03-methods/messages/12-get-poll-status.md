---
slug: /client/methods/get-poll-status
id: learn-client-get-poll-status-method
sidebar_position: 2
sidebar_label: متد getPollStatus

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getPollStatus`

TODO: توضیحات مربوط به `getPollStatus` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `poll_id` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getPollStatus", async (ctx) => {
  await client.getPollStatus(
    "poll_id: string"
  );
});

client.run();
```

---