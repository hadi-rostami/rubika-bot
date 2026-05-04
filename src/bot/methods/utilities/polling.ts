import { UpdateTypeEnum } from "../../types/enums";
import { checkFilters } from "../../../utils";
import Update from "../../contexts/update";
import Bot from "../../bot";
import path from "path";
import fs from "fs";
import { Filters } from "../../../client";

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
  console.log("✔ Start Robot... [ polling mode ]");

  let next_offset_id: string | undefined = loadOffset();

  while (true) {
    try {
      const res = await this.getUpdates(next_offset_id, 100);

      if (res.status_message !== "OK") {
        await sleep(500);
        continue;
      }

      for (const m of res.updates) {
        if (!checkTypes.includes(m.type)) continue;
        const time = m.update_time - Math.floor(Date.now() / 1000);

        if (time > 10 || time < -10) continue;
        for (const { prefix, filters, handler } of this.handlers.update) {
          const ctx = new Update(m, this);
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
            } catch {
              continue;
            }
          }
        }
      }
      if (res.next_offset_id) {
        next_offset_id = res.next_offset_id;
        saveOffset(next_offset_id as string);
      }
    } catch (e) {
      console.log(e);
    }

    await sleep(500);
  }
}

function saveOffset(offset: string) {
  const dir = path.dirname(OFFSET_FILE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(OFFSET_FILE_PATH, JSON.stringify({ offset }));
}

function loadOffset(): string | undefined {
  if (!fs.existsSync(OFFSET_FILE_PATH)) return undefined;
  const data = fs.readFileSync(OFFSET_FILE_PATH, "utf8");
  return JSON.parse(data).offset;
}
