---
slug: /client/methods/report-object
id: learn-client-report-object-method
sidebar_position: 2
sidebar_label: متد reportObject

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `reportObject`

TODO: توضیحات مربوط به `reportObject` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `object_guid` | `string` |
| `report_type` | [ReportType](/docs/models#reporttype) |
| `description` | `string` |
| `message_id` | `string` |
| `report_type_object` | [ReporttypeObject](/docs/models#reporttypeobject) |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/reportObject", async (ctx) => {
  await client.reportObject(
    "object_guid: string",
    "report_type: ReportType",
    "description: string",
    "message_id: string",
    "report_type_object: ReporttypeObject"
  );
});

client.run();
```

---