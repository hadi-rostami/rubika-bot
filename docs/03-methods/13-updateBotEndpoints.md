---
slug: /methods/updatebotendpoints
id: learn-bot-updatebotendpoints-method
sidebar_position: 2
sidebar_label: متد updateBotEndpoints

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `updateBotEndpoints`

تغییر ادرس وبهوک

## ورودی‌ها

| نام    | نوع                                                                  | توضیح      |
| ------ | -------------------------------------------------------------------- | ---------- |
| `url`  | `string`                                                             | آدرس وبهوک |
| `type` | [UpdateEndpointTypeEnum](/docs/robot/models/#updateendpointtypeenum) | نوع آدرس   |

## خروجی

- هیچ مقداری باز نمی‌گرداند. در صورت خطا، یک استثناء پرتاب می‌شود.

---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

const url = "https://example.com";

bot.command("/url", async (ctx) => {
  await bot.updateBotEndpoints(url, "ReceiveUpdate");
});

bot.run();
```

#### ⚠ توجه: این کار باعث میشه دیگه پیامی برای رباتتون نیاد و صرفا جهت معرفی بود
