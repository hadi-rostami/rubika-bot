import fs from "fs";
import Bot from "../../bot";
import checkFilters from "../../utils/checkFilter";
import { UpdateTypeEnum } from "../../types/enums";

const checkTypes = [UpdateTypeEnum.UpdatedMessage, UpdateTypeEnum.NewMessage];

export default async function polling(this: Bot) {
  console.log("✔ Start Robot... [ polling mode ]");

  let next_offset_id: string | undefined = loadOffset();

  setInterval(async () => {
    try {
      const res = await this.getUpdates(next_offset_id);
      const nowTime = Math.floor(Date.now() / 1000);
      for (let m of res.updates) {
        if (isNaN(m.new_message?.time || m.updated_message?.time)) continue;
        const messageTime =
          Number(m.new_message?.time || m.updated_message?.time) | 0;


        if (nowTime - messageTime < 2) {
          for (let { prefix, filters, handler } of this.handlers.update) {
            const ctx = { ...m, store: {} };
            const passed = await checkFilters(ctx, filters);

            if (passed) {
              if (prefix) {
                if (!checkTypes.includes(ctx.type)) continue;

                const text =
                  ctx.updated_message?.text || ctx.new_message?.text || "";

                if (typeof prefix === "string" && text !== prefix) continue;
                if (prefix instanceof RegExp && !prefix.test(text)) continue;
              }

              await handler(ctx, this);
            }
          }
        }
      }

      if (res.next_offset_id) {
        next_offset_id = res.next_offset_id;
        saveOffset(next_offset_id as string);
      }
    } catch (e) {
      console.error("Error occurred while polling:", e);
    }
  }, 1000);
}

function saveOffset(offset: string) {
  fs.writeFileSync("offset.json", JSON.stringify({ offset }));
}

function loadOffset(): string | undefined {
  if (!fs.existsSync("offset.json")) return undefined;
  const data = fs.readFileSync("offset.json", "utf8");
  return JSON.parse(data).offset;
}
