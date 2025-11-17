export default async function prompt(question: string): Promise<string> {
  process.stdout.write(question);

  const reader = Bun.stdin.stream().getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { value, done } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value);

      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      if (lines.length > 0) {
        const fullLine = lines[0];
        return fullLine.trim();
      }
    }
  } finally {
    reader.releaseLock();
  }

  return buffer.trim();
}