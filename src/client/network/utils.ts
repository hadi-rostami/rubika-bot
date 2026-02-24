import UserAgent from "user-agents";

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function resolvePlatform(platform: string, isShad: boolean) {
  const isAndroid = platform?.toLowerCase() === "android";
  return {
    app_name: "Main",
    app_version: isAndroid ? "3.6.4" : "4.4.9",
    platform: isAndroid ? "Android" : "Web",
    package: isAndroid
      ? `app.${isShad ? "sh" : "rb"}main.a`
      : `web.${isShad ? "shad" : "rubika"}.ir`,
    lang_code: "fa",
  };
}

export function buildHeaders(platform: string, isShad: boolean) {
  const headers: Record<string, string> = {
    "content-type": "application/json",
    connection: "keep-alive",
    "user-agent": new UserAgent().toString(),
  };
  if (platform.toLowerCase() !== "android") {
    headers.origin = `https://web.${isShad ? "shad" : "rubika"}.ir`;
    headers.referer = `https://web.${isShad ? "shad" : "rubika"}.ir/`;
  }

  return headers;
}
