---
slug: /client/methods/set-setting
id: learn-client-set-setting-method
sidebar_position: 2
sidebar_label: متد setSetting

last_update:
  date: '2026-09-06'
  author: 'hadi-rostami'
---

# `setSetting`

TODO: توضیحات مربوط به `setSetting` را وارد کنید.

## ورودی‌ها

| نام | نوع |
| --- | --- |
| `show_my_last_online` | [AllSettingsType](/docs/models#allsettingstype) _(اختیاری)_ |
| `show_my_phone_number` | [AllSettingsType](/docs/models#allsettingstype) _(اختیاری)_ |
| `link_forward_message` | [AllSettingsType](/docs/models#allsettingstype) _(اختیاری)_ |
| `show_my_profile_photo` | [SettingsType](/docs/models#settingstype) _(اختیاری)_ |
| `can_join_chat_by` | [SettingsType](/docs/models#settingstype) _(اختیاری)_ |

## خروجی

`unknown`

---

## نحوه استفاده

```js
import Client from "rubika/client";

const client = new Client("session-name");

client.command("/setSetting", async (ctx) => {
  await client.setSetting(
    "show_my_last_online: AllSettingsType",
    "show_my_phone_number: AllSettingsType",
    "link_forward_message: AllSettingsType",
    "show_my_profile_photo: SettingsType",
    "can_join_chat_by: SettingsType"
  );
});

client.run();
```

---