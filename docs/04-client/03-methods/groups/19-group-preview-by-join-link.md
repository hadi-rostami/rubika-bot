---
slug: /client/methods/group-preview-by-join-link
id: learn-client-group-preview-by-join-link-method
sidebar_position: 2
sidebar_label: متد groupPreviewByJoinLink

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `groupPreviewByJoinLink`

TODO: توضیحات مربوط به `groupPreviewByJoinLink` را وارد کنید.

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

client.command("/groupPreviewByJoinLink", async (ctx) => {
  await client.groupPreviewByJoinLink(
    "link: string"
  );
});

client.run();
```

---