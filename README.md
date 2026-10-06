<div align="center">

# Rubika

### A modern TypeScript library for building Rubika bots & clients.

**Fast · Type-Safe · Filter-Based · Bun-first**

<br />

<a href="https://www.npmjs.com/package/rubika">
  <img src="https://img.shields.io/npm/v/rubika?style=for-the-badge&logo=npm&logoColor=white" alt="npm version" />
</a>
<a href="https://www.npmjs.com/package/rubika">
  <img src="https://img.shields.io/npm/dm/rubika?style=for-the-badge&logo=npm&logoColor=white" alt="npm downloads" />
</a>
<a href="https://github.com/hadi-rostami/rubika-bot">
  <img src="https://img.shields.io/github/stars/hadi-rostami/rubika-bot?style=for-the-badge&logo=github" alt="GitHub stars" />
</a>
<a href="https://github.com/hadi-rostami/rubika-bot/blob/main/LICENSE">
  <img src="https://img.shields.io/github/license/hadi-rostami/rubika-bot?style=for-the-badge" alt="License" />
</a>

<br /><br />

[Documentation](https://docs.hr-dev.ir) ·
[NPM](https://www.npmjs.com/package/rubika) ·
[GitHub](https://github.com/hadi-rostami/rubika-bot)

</div>

---

## Why Rubika?

**Rubika** is a TypeScript-first library for building bots and client applications for **Rubika** and **Shad**.

It provides a clean event-driven API around:

* Bot updates
* Commands
* Composable filters
* Typed contexts
* Messages & media
* Keypads
* Webhooks & polling
* Client sessions
* Chat & user management
* Text formatting
* Temporary handler state

Instead of dealing with raw API requests, you work with a small set of predictable primitives:

```text
        Update
           │
           ▼
      ┌──────────┐
      │  Event   │
      └────┬─────┘
           │
           ▼
      ┌──────────┐
      │ Filters  │
      └────┬─────┘
           │
           ▼
      ┌──────────┐
      │  Context │
      └────┬─────┘
           │
           ▼
   Reply · Media · API
```

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🤖 Bot API

Build Rubika bots with:

* Event handlers
* Commands
* Regex commands
* Filters
* Typed contexts
* Polling
* Webhooks

</td>
<td width="50%">

### 👤 Client API

Build Rubika & Shad client applications with:

* Persistent sessions
* Events
* Commands
* Filters
* Messaging
* Chat management
* Moderation

</td>
</tr>

<tr>
<td>

### ⚡ Performance

Designed around asynchronous execution with a lightweight architecture and Bun as the primary runtime.

</td>
<td>

### 🛡️ Type Safety

Built with TypeScript and typed APIs for handlers, contexts, filters and models.

</td>
</tr>

<tr>
<td>

### 🧩 Composable Filters

Combine multiple filters to precisely control which updates reach your handlers.

</td>
<td>

### 🌐 Flexible Deployment

Use polling during development or deploy your bot behind a webhook in production.

</td>
</tr>
</table>

---

# 🚀 Quick Start

## 1. Install

```bash
bun add rubika
```

or:

```bash
npm install rubika
```

```bash
yarn add rubika
```

---

## 2. Create your bot

```ts
import Bot, { Filters } from "rubika/bot";

const bot = new Bot("YOUR_BOT_TOKEN");

bot.command("/start", async (ctx) => {
  await ctx.reply("سلام! 👋");
});

bot.on(
  "update",
  [Filters.isText],
  async (ctx) => {
    await ctx.reply("پیام شما دریافت شد.");
  },
);

bot.run();
```

That's it.

Your bot is now listening for Rubika updates.

---

# 🎯 Commands

Commands are first-class citizens.

```ts
bot.command("/start", async (ctx) => {
  await ctx.reply("Welcome!");
});
```

Need parameters?

Use regular expressions:

```ts
bot.command(
  /^\/sum_(\d+)_(\d+)$/,
  [Filters.isNewMessage],
  async (ctx) => {
    const text = Filters.findKey(ctx, "text");

    const [a, b] = text
      .split("_")
      .slice(1);

    await ctx.reply(
      `${a} + ${b} = ${Number(a) + Number(b)}`,
    );
  },
);
```

This keeps command parsing inside the command system instead of spreading string parsing across your handlers.

---

# 🧩 Filters

Filters are one of the core concepts of Rubika.

A handler can accept one filter or a complete filter pipeline:

```ts
bot.on(
  "update",
  [
    Filters.isText,
    Filters.isGroup,
  ],
  async (ctx) => {
    await ctx.reply(
      "A text message inside a group.",
    );
  },
);
```

You can compose filters to create precise handlers:

```text
Incoming Update
       │
       ▼
   isNewMessage
       │
       ▼
      isText
       │
       ▼
     isGroup
       │
       ▼
     Handler
```

Common built-in filters include:

```text
isText
isPersian
isLocation
isTag
isSpam
isSticker
isLink
isUsername
isForward
isReply
isContact
isPoll
isLiveLocation
isFile
isMention
isMarkdown
isPayment

isPrivate
isGroup
isChannel

isNewMessage
isUpdatedMessage
isRemovedMessage
isStartedBot
isStoppedBot
isUpdatedPayment
```

---

# 🔥 Custom Filters

Filters are simple functions.

That means creating your own filter is straightforward:

```ts
const isAdmin = (ctx) => {
  const admins = [
    "USER_ID_1",
    "USER_ID_2",
  ];

  return admins.includes(
    ctx.new_message?.sender_id,
  );
};
```

Use it together with built-in filters:

```ts
bot.on(
  "update",
  [
    Filters.isNewMessage,
    Filters.isText,
    isAdmin,
  ],
  async (ctx) => {
    await ctx.reply(
      "Admin access granted.",
    );
  },
);
```

No special filter class is required.

---

# 🧠 Context

Every handler receives a context containing the current update and useful methods for interacting with Rubika.

```ts
bot.on("update", async (ctx) => {
  console.log(ctx.type);
  console.log(ctx.chat_id);
  console.log(ctx.new_message);
});
```

A context can provide:

```ts
ctx.type
ctx.chat_id
ctx.new_message
ctx.updated_message
ctx.removed_message_id
ctx.updated_payment
ctx.store
ctx.bot
```

And message operations:

```ts
await ctx.reply("Hello");

await ctx.replyImage(
  "image.jpg",
  "Image caption",
);

await ctx.delete();
```

The idea is simple:

> **Receive an update → work with the context → respond.**

---

# 💬 Messages & Media

Send regular messages:

```ts
await ctx.reply("Hello from Rubika!");
```

Send media:

```ts
await ctx.replyImage("image.jpg");

await ctx.replyVideo("video.mp4");

await ctx.replyGif("animation.gif");
```

You can also work with other Rubika message types such as files, music, voice, locations, contacts and polls.

---

# ⌨️ Keypads

Build interactive keypads directly from your handlers.

```ts
import Bot, {
  ButtonTypeEnum,
} from "rubika/bot";

const bot = new Bot(
  "YOUR_BOT_TOKEN",
);

const keypad = {
  rows: [
    {
      buttons: [
        {
          button_text: "Profile",
          id: "profile",
          type: ButtonTypeEnum.Simple,
        },
      ],
    },
  ],
};

bot.on("update", async (ctx) => {
  await ctx.reply(
    "Choose an option:",
    keypad,
  );
});

bot.on(
  "update",
  [Filters.kypadID("profile")],
  async (ctx) => {
    await ctx.reply(
      "Profile selected.",
    );
  },
);
```

This makes interactive menus easy to build without manually processing raw callback data.

---

# 💾 Shared State

Filters can pass data to later filters and handlers using `ctx.store`.

```ts
type Store = {
  isAdmin: boolean;
};
```

Populate it inside a filter:

```ts
const checkAdmin = (ctx) => {
  const admins = [
    "USER_ID",
  ];

  ctx.store.isAdmin =
    admins.includes(
      ctx.new_message?.sender_id ?? "",
    );

  return true;
};
```

Then consume it inside the handler:

```ts
bot.on(
  "update",
  [
    Filters.isNewMessage,
    checkAdmin,
  ],
  async (ctx) => {
    if (ctx.store.isAdmin) {
      await ctx.reply(
        "دسترسی تأیید شد.",
      );
    }
  },
);
```

This is useful when filters need to prepare data before the final handler executes.

---

# 🌐 Polling or Webhook

Run locally with polling:

```ts
bot.run();
```

Deploy behind a webhook:

```ts
bot.run(
  WEBHOOK_URL,
  HOST,
  PORT,
);
```

The same bot handlers can be used in both environments.

---

# ⚙️ Bot Configuration

Configure the bot when creating it:

```ts
const bot = new Bot(
  "YOUR_BOT_TOKEN",
  {
    logLevel: "debug",
    retryCount: 3,
    timeout: 10000,
  },
);
```

| Option       | Description               |
| ------------ | ------------------------- |
| `logLevel`   | Controls logger verbosity |
| `retryCount` | Number of request retries |
| `timeout`    | Network request timeout   |

---

# 👤 Rubika & Shad Client

Rubika also provides a client API for session-based applications.

```ts
import Client from "rubika/client";

const client = new Client(
  "my-rubika-session",
  {
    application: "Rubika",
    platform: "Web",
  },
);

client.on(
  "message",
  async (ctx) => {
    console.log(
      ctx.message_id,
    );
  },
);

client.run();
```

The same API can be used with Shad:

```ts
const client = new Client(
  "my-shad-session",
  {
    application: "Shad",
    platform: "Web",
  },
);
```

Client applications can listen to events such as:

```text
message
chat
activities
notifications
```

---

# 🏗️ Architecture

Rubika is organized around a few core concepts:

```text
                    Rubika
                       │
             ┌─────────┴─────────┐
             │                   │
            Bot                Client
             │                   │
      ┌──────┼──────┐      ┌─────┼─────┐
      │      │      │      │     │     │
   Events Commands Filters Events Commands
      │      │      │      │     │     │
      └──────┴──┬───┘      └─────┴──┬───┘
                │                   │
             Context             Session
                │                   │
                └─────────┬─────────┘
                          │
                       Methods
```

The architecture keeps event handling, filtering, context and API operations separated while still providing a compact developer experience.

---

# 🧪 TypeScript-first

Rubika is written for TypeScript developers.

```ts
import Bot, {
  Filters,
  Contexts,
  Utils,
} from "rubika/bot";
```

You get type information directly inside your editor for:

* Bot APIs
* Client APIs
* Contexts
* Filters
* Models
* Methods
* Utilities

No manually maintained API definitions are required.

---

# 📚 Documentation

Explore the complete documentation:

### [📖 Documentation](https://docs.hr-dev.ir)

Learn more about:

```text
Bot
Client
Events
Commands
Filters
Contexts
Methods
Models
Types
Utilities
```

### Resources

| Resource         | Link                                                                  |
| ---------------- | --------------------------------------------------------------------- |
| 📦 npm           | [rubika](https://www.npmjs.com/package/rubika)                        |
| 💻 GitHub        | [hadi-rostami/rubika-bot](https://github.com/hadi-rostami/rubika-bot) |
| 📖 Documentation | [docs.hr-dev.ir](https://docs.hr-dev.ir)                              |
| 🐛 Issues        | [GitHub Issues](https://github.com/hadi-rostami/rubika-bot/issues)    |

---

# 🤝 Contributing

Contributions are welcome.

If you found a bug or have an idea:

1. Open an issue.
2. Describe the expected behavior.
3. Include a minimal reproduction when possible.
4. Mention your Rubika package version and runtime version.

Pull requests are welcome as well.

---

# 📄 License

Rubika is released under the **MIT License**.

See [`LICENSE`](LICENSE) for details.

---

<div align="center">

### Build something great with Rubika.

<br />

<a href="https://github.com/hadi-rostami/rubika-bot">
  <img src="https://img.shields.io/badge/⭐_Star_the_project-181717?style=for-the-badge&logo=github&logoColor=white" alt="Star the project" />
</a>

</div>
