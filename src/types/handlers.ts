import Bot from "..";
import { InlineMessage, Update } from "./interfaces";

export interface ContextMap {
  update: Update;
  inline: InlineMessage;
}

export type FilterFn<T> = (ctx: T) => boolean | Promise<boolean>;
export type NestedFilter<T> = Array<FilterFn<T> | FilterFn<T>[]>;

export type Handler<T> = {
  filters: NestedFilter<T>;
  handler: (ctx: T, bot: Bot) => Promise<void>;
  prefix?: string | RegExp;
};
