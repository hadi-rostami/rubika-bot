import Bot from "../../bot";
import Inline from "../../contexts/inline";
import Update from "../../contexts/update";
import { UpdateTypeEnum } from "../../types/enums";
import { checkFilters } from "../../../utils";
import { InlineMessage, UpdateMessage } from "../../types/interfaces";

type UpdateResult = { inline_message: InlineMessage; update: UpdateMessage };
const checkTypes = [UpdateTypeEnum.UpdatedMessage, UpdateTypeEnum.NewMessage];

async function handleUpdates(this: Bot, req: Request) {
  let data: UpdateResult;
  try {
    data = (await req.json()) as UpdateResult;
  } catch {
    return;
  }

  if (!data) return;

  if ("update" in data) {
    for (const { prefix, filters, handler } of this.handlers.update) {
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
  }

  if ("inline_message" in data) {
    for (const { filters, handler } of this.handlers.inline) {
      const ctx = new Inline(data.inline_message, this);
      const passed = await checkFilters(ctx, filters);

      if (passed) await handler(ctx);
    }
  }
}

export default handleUpdates;
