---
slug: /client/methods/channel-preview-by-join-link
id: learn-client-channel-preview-by-join-link-method
sidebar_position: 2
sidebar_label: متد channelPreviewByJoinLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `channelPreviewByJoinLink`

TODO: توضیحات مربوط به `channelPreviewByJoinLink` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `link` | `string` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/channelPreviewByJoinLink", async (ctx) => {
  await client.channelPreviewByJoinLink(
    "link: string"
  );
});

client.run();
```

---