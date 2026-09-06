---
slug: /client/methods/vote-poll
id: learn-client-vote-poll-method
sidebar_position: 2
sidebar_label: متد votePoll

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `votePoll`

TODO: توضیحات مربوط به `votePoll` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `poll_id` | `string` |
| `selection_index` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/votePoll", async (ctx) => {
  await client.votePoll(
    "poll_id: string",
    "selection_index: string"
  );
});

client.run();
```

---