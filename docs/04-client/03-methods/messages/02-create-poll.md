---
slug: /client/methods/create-poll
id: learn-client-create-poll-method
sidebar_position: 2
sidebar_label: متد createPoll

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `createPoll`

TODO: توضیحات مربوط به `createPoll` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `question` | `string` |
| `options` | `string[]` |
| `type` | `"Regular" | "Quiz"` _(اختیاری، پیش‌فرض: `"Regular"`)_ |
| `is_anonymous` | `boolean` _(اختیاری، پیش‌فرض: `true`)_ |
| `allows_multiple_answers` | `boolean` _(اختیاری، پیش‌فرض: `true`)_ |
| `correct_option_index` | `number` _(اختیاری)_ |
| `explanation` | `string` _(اختیاری)_ |
| `reply_to_message_id` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/createPoll", async (ctx) => {
  await client.createPoll(
    "object_guid: string",
    "question: string",
    "options: string[]",
    "Regular",
    true,
    true,
    "correct_option_index: number",
    "explanation: string",
    "reply_to_message_id: string"
  );
});

client.run();
```

---