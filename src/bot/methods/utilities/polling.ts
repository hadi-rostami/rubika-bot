import fs from "fs";
import Bot from "../../bot";
import { checkFilters } from "../../../utils";
import { UpdateTypeEnum } from "../../types/enums";
import Update from "../../contexts/update";

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

        if (nowTime - messageTime < 10) {
          for (let { prefix, filters, handler } of this.handlers.update) {
            const ctx = new Update(m, this);
            const passed = await checkFilters(ctx, filters);

            if (passed) {
              if (prefix) {
                if (!checkTypes.includes(ctx.type)) continue;

                const text =
                  ctx.updated_message?.text || ctx.new_message?.text || "";

                if (typeof prefix === "string" && text !== prefix) continue;
                if (prefix instanceof RegExp && !prefix.test(text)) continue;
              }
              try {
                await handler(ctx);
              } catch {}
            }
          }
        }
      }

      if (res.next_offset_id) {
        next_offset_id = res.next_offset_id;
        saveOffset(next_offset_id as string);
      }
    } catch (e) {
      this.logger.error("Error occurred while polling:" + e, "warn");
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
