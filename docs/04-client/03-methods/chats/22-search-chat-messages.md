---
slug: /client/methods/search-chat-messages
id: learn-client-search-chat-messages-method
sidebar_position: 2
sidebar_label: متد searchChatMessages

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `searchChatMessages`

TODO: توضیحات مربوط به `searchChatMessages` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `search_text` | `string` |
| `type` | `"Text" | "Hashtag"` |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/searchChatMessages", async (ctx) => {
  await client.searchChatMessages(
    "object_guid: string",
    "search_text: string",
    "type: "Text" | "Hashtag""
  );
});

client.run();
```

---