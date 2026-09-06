---
slug: /client/methods/get-poll-option-voters
id: learn-client-get-poll-option-voters-method
sidebar_position: 2
sidebar_label: متد getPollOptionVoters

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getPollOptionVoters`

TODO: توضیحات مربوط به `getPollOptionVoters` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `poll_id` | `string` |
| `selection_index` | `string` |
| `start_id` | `string | null` _(اختیاری، پیش‌فرض: `null`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getPollOptionVoters", async (ctx) => {
  await client.getPollOptionVoters(
    "poll_id: string",
    "selection_index: string",
    null
  );
});

client.run();
```

---