---
slug: /client/methods/ban-channel-member
id: learn-client-ban-channel-member-method
sidebar_position: 2
sidebar_label: متد banChannelMember

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `banChannelMember`

TODO: توضیحات مربوط به `banChannelMember` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `channel_guid` | `string` |
| `member_guid` | `string` |
| `action` | `"Set" | "Unset"` _(اختیاری، پیش‌فرض: `"Set"`)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/banChannelMember", async (ctx) => {
  await client.banChannelMember(
    "channel_guid: string",
    "member_guid: string",
    "Set"
  );
});

client.run();
```

---