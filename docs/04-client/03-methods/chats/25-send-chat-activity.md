---
slug: /client/methods/send-chat-activity
id: learn-client-send-chat-activity-method
sidebar_position: 2
sidebar_label: متد sendChatActivity

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `sendChatActivity`

TODO: توضیحات مربوط به `sendChatActivity` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `activity` | `"Typing" | "Uploading" | "Recording"` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/sendChatActivity", async (ctx) => {
  await client.sendChatActivity(
    "object_guid: string",
    "activity: "Typing" | "Uploading" | "Recording""
  );
});

client.run();
```

---