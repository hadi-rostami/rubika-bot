import { UpdateTypeEnum } from "../../types/enums";
import { checkFilters } from "../../../utils";
import Update from "../../contexts/update";
import Bot from "../../bot";
import path from "path";
import fs from "fs";
import { Filters } from "../../../client";
import EnhancedLogger from "../../../utils/errors";
import Event from "../../contexts/event";

const checkTypes = [
  UpdateTypeEnum.UpdatedMessage,
  UpdateTypeEnum.NewMessage,
  UpdateTypeEnum.RemovedMessage,
  UpdateTypeEnum.UpdatedPayment,
  UpdateTypeEnum.StoppedBot,
  UpdateTypeEnum.StartedBot,
  UpdateTypeEnum.EventData,
];

const OFFSET_FILE_PATH = path.join(
  process.cwd(),
  process.env.OFFSET_PATH || "offset.json",
);

const sleep = async (time: number) =>
  await new Promise((res) => setTimeout(res, time));

export default async function polling(this: Bot) {
  try {
    let next_offset_id: string | undefined;
    try {
      next_offset_id = loadOffset(this.logger);
      if (next_offset_id) {
        this.logger.info(`Resuming polling from offset: ${next_offset_id}`);
      }
    } catch (err) {
      this.logger.warn("Failed to load offset file, starting fresh." + err);
      next_offset_id = undefined;
    }

    this.logger.info("✔ Robot started successfully in [polling mode]");
    console.log(`Bot started successfully in [polling mode]`);

    while (true) {
      try {
        const res = await this.getUpdates(next_offset_id, 100);

        if (res.status_message !== "OK") {
          this.logger.warn(
            `GetUpdates returned non-OK status: ${res.status_message}`,
          );
          await sleep(1000);
          continue;
        }

        if (!res.updates || res.updates.length === 0) {
          await sleep(500);
          continue;
        }

        this.logger.debug(`Received ${res.updates.length} update(s).`);

        for (const m of res.updates) {
          if (!checkTypes.includes(m.type)) continue;

          const updateTime = m.update_time;
          const now = Math.floor(Date.now() / 1000);
          const timeDiff = updateTime - now;

          if (timeDiff > 10 || timeDiff < -10) {
            this.logger.debug(
              `Skipping update due to time mismatch: ${timeDiff}s`,
            );
            continue;
          }

          const isEventData = m.type === UpdateTypeEnum.EventData;

          const handlers = isEventData
            ? this.handlers.events
            : this.handlers.update;

          const ctx = isEventData ? new Event(m, this) : new Update(m, this);

          for (const { prefix, filters, handler } of handlers) {
            try {
              const passed = await checkFilters(ctx, filters);

              if (!passed) continue;

              if (prefix) {
                const text = Filters.findKey(m, "text") || null;

                if (!text) continue;

                if (typeof prefix === "string") {
                  if (text !== prefix) continue;
                } else if (prefix instanceof RegExp) {
                  if (!prefix.test(text)) continue;
                }
              }

              try {
                await handler(ctx as never);

                this.logger.debug(
                  `Handler executed successfully for update type: ${m.type}`,
                );
              } catch (error) {
                this.logger.error(
                  `Error in message handler for update ID ${m}: ${error}`,
                );
              }
            } catch (filterError) {
              this.logger.error(`Error during filter checking: ${filterError}`);
            }
          }
        }

        if (res.next_offset_id) {
          next_offset_id = res.next_offset_id;
          try {
            saveOffset(next_offset_id as string);
          } catch (ioError) {
            this.logger.error("Failed to save offset to disk:" + ioError);
          }
        }
      } catch (networkError) {
        this.logger.error(
          "Network error while fetching updates:" + networkError,
        );
        await sleep(2000);
      }
    }
  } catch (fatalError) {
    this.logger.critical(
      "Fatal error in polling loop. Stopping bot..." + fatalError,
    );
    throw fatalError;
  }
}

function saveOffset(offset: string) {
  const dir = path.dirname(OFFSET_FILE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(OFFSET_FILE_PATH, JSON.stringify({ offset }, null, 2), {
    flag: "w",
  });
}

function loadOffset(logger: EnhancedLogger<Bot>): string | undefined {
  if (!fs.existsSync(OFFSET_FILE_PATH)) return undefined;

  try {
    const data = fs.readFileSync(OFFSET_FILE_PATH, "utf8");
    if (!data.trim()) return undefined;

    const parsed = JSON.parse(data);
    return parsed.offset;
  } catch (err) {
    logger?.warn("Offset file corrupted. Resetting offset." + err);
    try {
      fs.renameSync(OFFSET_FILE_PATH, OFFSET_FILE_PATH + ".bak");
    } catch {
      logger?.warn("Failed to rename offset file. Deleting it." + err);
    }
    return undefined;
  }
}
