import Bot from "../../bot";
import Inline from "../../contexts/inline";
import Update from "../../contexts/update";
import { UpdateTypeEnum } from "../../types/enums";
import { checkFilters } from "../../../utils";
import { InlineMessage, UpdateMessage } from "../../types/interfaces";

type UpdateResult = { inline_message: InlineMessage; update: UpdateMessage };
const checkTypes = [
  UpdateTypeEnum.UpdatedMessage,
  UpdateTypeEnum.RemovedMessage,
  UpdateTypeEnum.NewMessage,
];

async function handleUpdates(this: Bot, req: Request) {
  let data: UpdateResult;
  try {
    data = (await req.json()) as UpdateResult;
  } catch (error) {
    this.logger.warn(
      `Invalid JSON received from webhook: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
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

        try {
          await handler(ctx);
        } catch (err) {
          this.logger.error(
            `Error in update handler for update #${data.update}:` + err,
          );
        }
      }
    }
  }

  if ("inline_message" in data) {
    for (const { filters, handler } of this.handlers.inline) {
      const ctx = new Inline(data.inline_message, this);
      const passed = await checkFilters(ctx, filters);

      if (passed) {
        try {
          await handler(ctx);
        } catch (err) {
          this.logger.error(
            `Error in inline handler for message #${data.inline_message}:` +
              err,
          );
        }
      }
    }
  }
}

export default handleUpdates;
