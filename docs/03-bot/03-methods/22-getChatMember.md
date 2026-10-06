---
slug: /bot/methods/getChatMember
id: learn-bot-getChatMember-method
sidebar_position: 2
sidebar_label: متد getChatMember

last_update:
  date: "2026-02-18"
  author: "hadi-rostami"
---

# `getChatMember`

استفاده از متد `getChatMember` برای ساخت جوین اجباری کانال و گروه

## ورودی ها

| نام       | نوع      | توضیح                                |
| --------- | -------- | ------------------------------------ |
| `chat_id` | `string` | شناسه چتی که باید کاربر در ان چک شود |
| `user_id` | `string` | شناسه کاربری که باید چک شود          |

## خروجی

| فیلد             | نوع                                   | توضیح         |
| ---------------- | ------------------------------------- | ------------- |
| `chat_member`    | [ChatMember](/docs/models#chatmember) | اطلاعات کاربر |
| `status_message` | `string`                              | پیام وضعیت    |
| `status`         | `string`                              | وضعیت         |

---

## نحوه استفاده و ساخت جوین اجباری

```js

import Bot from "rubika/bot"

const bot = new Bot("YOUR_TOKEN");

const ChannelID = "c0...";

bot.on(
  "update",
  [Filters.isGroup, Filters.isNewMessage],
  async (ctx) => {
    const res = await bot.unbanChatMember(
      ChannelID,
      ctx.new_message!.sender_id,
    );

    if (res.status === "OK") await ctx.reply("کاربر در کانال  وجود دارد");
    else {
      await ctx.reply("کاربر لطفا وارد کانال @test_channel شوید");
      await ctx.delete();
    }
  },
);

bot.run();

```
