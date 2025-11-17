import Bot from "../../bot";
import { UpdateTypeEnum } from "../../types/enums";
import checkFilters from "../../utils/checkFilter";

const checkTypes = [UpdateTypeEnum.UpdatedMessage, UpdateTypeEnum.NewMessage];

async function handleUpdates(this: Bot, req: Request) {
  let responseData = null;
  try {
    responseData = await req.json();
  } catch {}

  if (!responseData) return;

  const data = JSON.parse(
    JSON.stringify(responseData, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    )
  );

  if (data?.update) {
    for (let { prefix, filters, handler } of this.handlers.update) {
      const ctx = { ...data.update, store: {} };
      const passed = await checkFilters(ctx, filters);

      if (passed) {
        if (prefix) {
          if (!checkTypes.includes(ctx.type)) continue;

          const text = ctx.updated_message?.text || ctx.new_message?.text || "";

          if (typeof prefix === "string" && text !== prefix) continue;
          if (prefix instanceof RegExp && !prefix.test(text)) continue;
        }

        await handler(ctx, this);
      }
    }
  } else if (data?.inline_message) {
    for (let { filters, handler } of this.handlers.inline) {
      const ctx = { ...data.inline_message, store: {} };
      const passed = await checkFilters(ctx, filters);

      if (passed) await handler(ctx, this);
    }
  }
}

export default handleUpdates;
