---
slug: /client/methods/action-on-join-request
id: learn-client-action-on-join-request-method
sidebar_position: 2
sidebar_label: متد actionOnJoinRequest

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `actionOnJoinRequest`

TODO: توضیحات مربوط به `actionOnJoinRequest` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `user_guid` | `string` |
| `object_type` | `"Group" | "Channel"` |
| `action` | `"Accept" | "Reject"` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/actionOnJoinRequest", async (ctx) => {
  await client.actionOnJoinRequest(
    "object_guid: string",
    "user_guid: string",
    "object_type: "Group" | "Channel"",
    "action: "Accept" | "Reject""
  );
});

client.run();
```

---