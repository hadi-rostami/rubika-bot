import Bot from "..";
import { Update, Inline } from "../contexts";

export interface ContextMap {
  update: Update;
  inline: Inline;
  error: {
    message: string;
    bot: Bot;
  };
}

export type FilterFn<T> = (ctx: T) => boolean | Promise<boolean>;
export type NestedFilter<T> = Array<FilterFn<T> | FilterFn<T>[]>;

export type Handler<T> = {
  filters: NestedFilter<T>;
  handler: (ctx: T) => Promise<void>;
  prefix?: string | RegExp;
};
