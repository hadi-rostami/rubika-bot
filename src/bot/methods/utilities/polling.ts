// import { UpdateTypeEnum } from "../../types/enums";
// import { checkFilters } from "../../../utils";
// import Update from "../../contexts/update";
// import Bot from "../../bot";
// import path from "path";
// import fs from "fs";
// import { Filters } from "../../../client";

// const checkTypes = [
//   UpdateTypeEnum.UpdatedMessage,
//   UpdateTypeEnum.NewMessage,
//   UpdateTypeEnum.RemovedMessage,
//   UpdateTypeEnum.UpdatedPayment,
//   UpdateTypeEnum.StoppedBot,
//   UpdateTypeEnum.StartedBot,
// ];

// const OFFSET_FILE_PATH = path.join(
//   process.cwd(),
//   process.env.OFFSET_PATH || "offset.json",
// );

// const sleep = async (time: number) =>
//   await new Promise((res) => setTimeout(res, time));

// export default async function polling(this: Bot) {
//   console.log("✔ Start Robot... [ polling mode ]");

//   let next_offset_id: string | undefined = loadOffset();

//   while (true) {
//     try {
//       const res = await this.getUpdates(next_offset_id, 100);

//       if (res.status_message !== "OK") {
//         await sleep(500);
//         continue;
//       }

//       for (const m of res.updates) {
//         if (!checkTypes.includes(m.type)) continue;
//         const time = m.update_time - Math.floor(Date.now() / 1000);

//         if (time > 10 || time < -10) continue;
//         for (const { prefix, filters, handler } of this.handlers.update) {
//           const ctx = new Update(m, this);
//           const passed = await checkFilters(ctx, filters);

//           if (passed) {
//             if (prefix) {
//               const text = Filters.findKey(m, "text") || null;

//               if (!text) continue;
//               if (typeof prefix === "string" && text !== prefix) continue;
//               if (prefix instanceof RegExp && !prefix.test(text)) continue;
//             }
//             try {
//               await handler(ctx);
//             } catch {
//               continue;
//             }
//           }
//         }
//       }
//       if (res.next_offset_id) {
//         next_offset_id = res.next_offset_id;
//         saveOffset(next_offset_id as string);
//       }
//     } catch {}

//     await sleep(500);
//   }
// }

// function saveOffset(offset: string) {
//   const dir = path.dirname(OFFSET_FILE_PATH);
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir, { recursive: true });
//   }
//   fs.writeFileSync(OFFSET_FILE_PATH, JSON.stringify({ offset }));
// }

// function loadOffset(): string | undefined {
//   if (!fs.existsSync(OFFSET_FILE_PATH)) return undefined;
//   const data = fs.readFileSync(OFFSET_FILE_PATH, "utf8");
//   return JSON.parse(data).offset;
// }

import { UpdateTypeEnum } from "../../types/enums";
import { checkFilters } from "../../../utils";
import Update from "../../contexts/update";
import Bot from "../../bot";
import path from "path";
import fs from "fs";
import { Filters } from "../../../client";
import EnhancedLogger from "../../../utils/errors";

const checkTypes = [
  UpdateTypeEnum.UpdatedMessage,
  UpdateTypeEnum.NewMessage,
  UpdateTypeEnum.RemovedMessage,
  UpdateTypeEnum.UpdatedPayment,
  UpdateTypeEnum.StoppedBot,
  UpdateTypeEnum.StartedBot,
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

          for (const { prefix, filters, handler } of this.handlers.update) {
            const ctx = new Update(m, this);

            try {
              const passed = await checkFilters(ctx, filters);

              if (passed) {
                if (prefix) {
                  const text = Filters.findKey(m, "text") || null;
                  if (!text) continue;

                  if (typeof prefix === "string" && text !== prefix) continue;
                  if (prefix instanceof RegExp && !prefix.test(text)) continue;
                }

                try {
                  await handler(ctx);
                  this.logger.debug(
                    `Handler executed successfully for update type: ${m.type}`,
                  );
                } catch (error) {
                  this.logger.error(
                    `Error in message handler for update ID ${m}:` + error,
                  );

                  continue;
                }
              }
            } catch (filterError) {
              this.logger.error("Error during filter checking:" + filterError);
              continue;
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
  // نوشتن امن‌تر با گزینه flush
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
      //
    }
    return undefined;
  }
}
