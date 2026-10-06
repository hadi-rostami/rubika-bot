import { Update, Inline } from "../contexts";
import Event from "../contexts/event";

export interface ContextMap<T> {
  update: Update<T>;
  inline: Inline<T>;
  events: Event<T>;
}

export type FilterFn<T> = (ctx: T) => boolean | Promise<boolean>;
export type NestedFilter<T> = Array<FilterFn<T> | FilterFn<T>[]>;

export type Handler<T> = {
  filters: NestedFilter<T>;
  handler: (ctx: T) => Promise<void>;
  prefix?: string | RegExp;
};
