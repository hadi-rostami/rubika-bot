import Network from ".";
import Crypto from "../crypto";
import { ContextMap, Handler } from "../types/client.type";
import { ContextConstructors } from "../contexts/contextConstructors";
import Message from "../contexts/message.type";
import { checkFilters } from "../../utils";

const TYPES = {
  chat: "chat_updates",
  message: "message_updates",
  activities: "show_activities",
  notifications: "show_notifications",
};

export async function setupWebSocket(network: Network) {
  while (!network.wssUrl) {
    await network.delay(1000);
  }

  network.ws = new WebSocket(network.wssUrl);

  network.ws.addEventListener("open", async () => await openSocket(network));
  network.ws.addEventListener(
    "message",
    async (event: any) => await getMessage(event.data, network),
  );

  network.ws.addEventListener("error", async () => {
    if (!network.reconnecting) {
      console.error("WebSocket error, reconnecting...");
      network.reconnecting = true;
      await resetConnection(network);
    }
  });

  network.ws.addEventListener("close", async () => {
    if (!network.reconnecting) {
      console.warn("WebSocket closed, reconnecting...");
      network.reconnecting = true;
      await resetConnection(network);
    }
  });
}

export async function openSocket(network: Network) {
  try {
    console.log("Starting bot...");

    if (network.ws && network.ws.readyState === WebSocket.OPEN) {
      const payload = JSON.stringify({
        api_version: "5",
        auth: network.client.auth,
        data: "",
        method: "handShake",
      });

      network.ws.send(payload);

      if (network.heartbeatInterval) clearInterval(network.heartbeatInterval);

      network.heartbeatInterval = setInterval(() => {
        try {
          if (network.ws?.readyState === WebSocket.OPEN) {
            network.ws.send(JSON.stringify({}));
          }
        } catch (err) {
          console.error("Error sending heartbeat", err);
        }
      }, 30000);
    } else {
      console.warn("WebSocket is not open; cannot send handshake");
    }
  } catch (err) {
    console.error("Error during openSocket execution", err);
  }
}

async function resetConnection(network: Network) {
  network.ws?.close();
  network.ws = undefined;

  setTimeout(async () => {
    try {
      await network.getUpdates();
    } catch (e) {
      console.error("Failed to reconnect:", e);
    } finally {
      network.reconnecting = false;
    }
  }, 5000);
}

function resetInactivityTimer(network: Network) {
  if (network.inactivityTimeout) clearTimeout(network.inactivityTimeout);

  network.inactivityTimeout = setTimeout(
    () => {
      console.warn(
        "No updates received for 10 minutes. Reconnecting WebSocket...",
      );
      void resetConnection(network).catch((err) => {
        console.error("Error during inactivity reset:", err);
      });
    },
    10 * 60 * 1000,
  );
}

async function getMessage(message: string, network: Network) {
  try {
    const { data_enc } = JSON.parse(message);
    if (!data_enc || !network.client.key) return;

    resetInactivityTimer(network);

    const update = JSON.parse(Crypto.decrypt(data_enc, network.client.key));

    const tasks: Promise<void>[] = [];

    for (const ctxKey of Object.keys(TYPES) as (keyof typeof TYPES)[]) {
      const updateKey = TYPES[ctxKey];
      const author_title = getAuthorTitle(update);

      const items = update[updateKey];

      if (!Array.isArray(items) || items.length === 0) continue;

      const handlers = network.client.handlers[ctxKey];
      if (!handlers || handlers.length === 0) continue;

      tasks.push(
        handleCategory(ctxKey, handlers as any, items, network, author_title),
      );
    }

    if (tasks.length === 1) {
      await tasks[0];
    } else if (tasks.length > 1) {
      await Promise.all(tasks);
    }
  } catch (err) {
    console.error("[getMessage] Failed to decrypt or process message:", err);
  }
}

async function handleCategory<T extends keyof ContextMap>(
  type: T,
  handlers: Handler<ContextMap[T]>[],
  updates: any[],
  network: Network,
  author_title: string,
) {
  const CtxClass = ContextConstructors[type];
  if (!CtxClass) {
    console.warn(`[handleCategory] No constructor found for type: ${type}`);
    return;
  }

  for (let update of updates) {
    if (!update.message) update.message = {};
    update.client_guid = network.client.userGuid;
    update.message.author_title = author_title;

    const ctx = new CtxClass(network.client, update) as ContextMap[T];

    for (const { filters, handler, prefix } of handlers) {
      const passed = await checkFilters(ctx, filters);

      if (passed) {
        if (type === "message" && prefix) {
          const text = (ctx as Message).message.text;
          if (!text) continue;

          if (typeof prefix === "string" && text !== prefix) continue;
          if (prefix instanceof RegExp && !prefix.test(text)) continue;
        }

        await handler(ctx);
      }
    }
  }
}

// utils

const getAuthorTitle = (update: any) => {
  const notification = update.show_notifications?.[0];
  const chatUpdate = update.chat_updates?.[0];

  if (notification) {
    const objectGuid = notification?.message_data?.object_guid;
    if (objectGuid?.startsWith("u0")) return notification.title;
    else if (objectGuid?.startsWith("g0"))
      return notification.text?.split(":")[0];
  } else if (chatUpdate) {
    return chatUpdate.chat?.last_message?.author_title || "Unknown User";
  } else return "Unknown User";
};
