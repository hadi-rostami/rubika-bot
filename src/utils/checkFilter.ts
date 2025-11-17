export default async function checkFilters(
  ctx: any,
  filters: (Function | Function[])[]
): Promise<boolean> {
  for (const filter of filters) {
    if (Array.isArray(filter)) {
      // OR logic
      const results = await Promise.all(
        filter.map((f) => Promise.resolve(f(ctx)))
      );
      if (!results.some(Boolean)) return false;
    } else {
      // AND logic
      const result = await Promise.resolve(filter(ctx));
      if (!result) return false;
    }
  }
  return true;
}
