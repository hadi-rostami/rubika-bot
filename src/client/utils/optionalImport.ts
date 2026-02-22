export default async function optionalImport<T>(moduleName: string): Promise<T | null> {
  try {
    const mod = await import(moduleName);
    return mod.default || mod;
  } catch {
    return null;
  }
}
