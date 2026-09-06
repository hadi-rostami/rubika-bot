---
slug: /client/methods/join-channel-by-link
id: learn-client-join-channel-by-link-method
sidebar_position: 2
sidebar_label: متد joinChannelByLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `joinChannelByLink`

TODO: توضیحات مربوط به `joinChannelByLink` را وارد کنید.

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

client.command("/joinChannelByLink", async (ctx) => {
  await client.joinChannelByLink(
    "link: string"
  );
});

client.run();
```

---