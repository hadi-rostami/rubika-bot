import Client from "../../client";

type SystemVersions = { [key: string]: string };

const systemVersions: SystemVersions = {
  "Windows NT 10.0": "Windows 10",
  "Windows NT 6.2": "Windows 8",
  "Windows NT 6.1": "Windows 7",
  "Windows NT 6.0": "Windows Vista",
  "Windows NT 5.1": "windows XP",
  "Windows NT 5.0": "Windows 2000",
  Mac: "Mac/iOS",
  X11: "UNIX",
  Linux: "Linux",
};

interface BrowserInfo {
  token: string;
  lang_code: string;
  token_type: string;
  app_version: string;
  system_version: string;
  device_model: string;
  device_hash: string;
}

async function getBrowser(
  userAgent: string,
  langCode: string,
  appVersion: string,
): Promise<BrowserInfo> {
  const deviceModelMatch = userAgent
    .toLowerCase()
    .match(/(opera|chrome|safari|firefox|msie|trident)\/(\d+)/);
  let deviceModel = "Unknown";

  if (!deviceModelMatch) {
    throw new Error(`Cannot parse user-agent (${userAgent})`);
  } else {
    deviceModel = `${deviceModelMatch[1]} ${deviceModelMatch[2]}`;
  }

  let systemVersion = "Unknown";
  for (const [key, value] of Object.entries(systemVersions)) {
    if (userAgent.includes(key)) {
      systemVersion = value;
      break;
    }
  }

  const deviceHash = "2" + (userAgent.match(/\d+/g)?.join("") || "");

  return {
    token: "",
    lang_code: langCode,
    token_type: "Web",
    app_version: `WB_${appVersion}`,
    system_version: systemVersion,
    device_model: deviceModel.charAt(0).toUpperCase() + deviceModel.slice(1),
    device_hash: deviceHash,
  };
}

async function registerDevice(this: Client): Promise<void> {
  const result = await this.builder(
    "registerDevice",
    await getBrowser(
      this.network.userAgent,
      this.network.defaultPlatform.lang_code,
      this.network.defaultPlatform.app_version
    )
  );

  return result;
}

export default registerDevice;
