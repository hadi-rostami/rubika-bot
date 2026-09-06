---
slug: /client/methods/get-group-mention-list
id: learn-client-get-group-mention-list-method
sidebar_position: 2
sidebar_label: متد getGroupMentionList

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `getGroupMentionList`

TODO: توضیحات مربوط به `getGroupMentionList` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `group_guid` | `string` |
| `search_mention` | `string` _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/getGroupMentionList", async (ctx) => {
  await client.getGroupMentionList(
    "group_guid: string",
    "search_mention: string"
  );
});

client.run();
```

---