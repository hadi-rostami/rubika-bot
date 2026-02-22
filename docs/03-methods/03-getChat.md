---
slug: /methods/getchat
id: learn-bot-getchat-method
sidebar_position: 2
sidebar_label: متد getChat

last_update:
  date: '2026-02-18'
  author: 'hadi-rostami'
---

# `getChat`

استفاده از متد `getChat` برای دریافت اطلاعات مرتبط با چت فعلی.

## ورودی ها

| نام       | نوع      | توضیح                                    |
| --------- | -------- | ---------------------------------------- |
| `chat_id` | `string` | شناسه چتی که باید اطلاعات آن بازیابی شود |

## خروجی

| فیلد       | نوع                                               | توضیح        |
| ---------- | ------------------------------------------------- | ------------ |
| `chat_id`    | `string`                                          | شناسه چت     |
| `chat_type`  | [`ChatTypeEnum`](/docs/robot/models#chattypeenum) | نوع چت       |
| `user_id`    | `string`                                          | شناسه کاربر  |
| `first_name` | `string`                                          | نام کوچک     |
| `last_name`  | `string`                                          | نام خانوادگی |
| `title`      | `string`                                          | عنوان چت     |
| `username`   | `string`                                          | نام کاربری   |


---

## نحوه استفاده

```js
import Bot from "rubika";

const bot = new Bot("YOUR_TOKEN");

bot.command("/chatInfo", async (ctx) => {
  const chatInfo = await bot.getChat(ctx.chat_id);

  await ctx.reply(JSON.stringify(chatInfo));
});

bot.run();
```
