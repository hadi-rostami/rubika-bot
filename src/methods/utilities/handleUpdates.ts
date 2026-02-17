import Bot from "../../bot";
import Inline from "../../contexts/inline";
import Update from "../../contexts/update";
import { UpdateTypeEnum } from "../../types/enums";
import { checkFilters } from "../../utils";

const checkTypes = [UpdateTypeEnum.UpdatedMessage, UpdateTypeEnum.NewMessage];

async function handleUpdates(this: Bot, req: Request) {
  let responseData = null;
  try {
    responseData = await req.json();
  } catch {}

  if (!responseData) return;

  const data = JSON.parse(
    JSON.stringify(responseData, (_, v) =>
      typeof v === "bigint" ? v.toString() : v,
    ),
  );

  if (data?.update) {
    for (let { prefix, filters, handler } of this.handlers.update) {
      const ctx = new Update(data.update, this);
      const passed = await checkFilters(ctx, filters);

      if (passed) {
        if (prefix) {
          if (!checkTypes.includes(ctx.type)) continue;

          const text = ctx.updated_message?.text || ctx.new_message?.text || "";

          if (typeof prefix === "string" && text !== prefix) continue;
          if (prefix instanceof RegExp && !prefix.test(text)) continue;
        }

        await handler(ctx);
      }
    }
  } else if (data?.inline_message) {
    for (let { filters, handler } of this.handlers.inline) {
      const ctx = new Inline(data.inline_message, this);
      const passed = await checkFilters(ctx, filters);

      if (passed) await handler(ctx);
    }
  }
}

export default handleUpdates;
