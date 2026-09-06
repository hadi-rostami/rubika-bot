import Network from ".";
import Crypto from "../crypto";

interface GetDocsResponse {
  data?: {
    API: Record<string, string>;
    socket: Record<string, string>;
    default_api: string;
    default_socket: string;
  };
}

interface SendPayloadInputs {
  input?: Record<string, any>;
  method?: string;
  tmp_session: boolean;
}

/**
 * Retrieves API and WSS server URLs with retry limit to prevent infinite loops in critical failures
 */
export async function getDcs(network: Network): Promise<boolean> {
  const url = `https://${network.client.application === "Shad" ? "sh" : ""}getdcmess.iranlms.ir/`;
  const RETRY_DELAY = 3000;
  const MAX_RETRIES = 10;
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      network.client.logger.debug(
        `[getDcs] Attempting to fetch DCs from ${url}...`,
      );

      const res = await fetch(url, {
        method: "GET",
        headers: { "User-Agent": network.userAgent },
      });

      if (res.status === 200) {
        const body = (await res.json()) as GetDocsResponse;

        if (body?.data) {
          const dcs = body.data;
          network.apiUrl = `${dcs.API[dcs.default_api]}/`;
          network.wssUrl = dcs.socket[dcs.default_socket];

          network.client.logger.info(
            `[getDcs] DCs retrieved successfully. API: ${network.apiUrl}`,
          );
          return true;
        } else {
          network.client.logger.warn(
            "[getDcs] Response received but data field is missing.",
          );
        }
      } else {
        network.client.logger.error(
          `[getDcs] Unexpected status code: ${res.status}`,
          "error",
        );
      }
    } catch (error: unknown) {
      network.client.logger.error(
        `[getDcs] Network error occurred: ${error}`,
        "error",
      );
    }

    retries++;
    if (MAX_RETRIES > 0 && retries >= MAX_RETRIES) {
      network.client.logger.error(
        `[getDcs] Failed to retrieve DCs after ${MAX_RETRIES} attempts. Stopping retries.`,
        "error",
      );
      return false;
    }

    network.client.logger.debug(
      `[getDcs] Retrying in ${RETRY_DELAY}ms... (Attempt ${retries + 1})`,
    );
    await network.delay(RETRY_DELAY);
  }

  return false;
}

/**
 * Sends a POST request with retry logic and enhanced error reporting
 * Returns a standardized error object if all attempts fail instead of void/undefined
 */
export async function sendRequest(network: Network, url: string, data: any) {
  const MAX_ATTEMPTS = 3;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      network.client.logger.debug(
        `[request] Sending request to ${url} (Attempt ${attempt}/${MAX_ATTEMPTS})`,
      );

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...network.headers,
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        const jsonData = await res.json();
        network.client.logger.debug(`[request] Success received from ${url}`);
        return jsonData;
      } else {
        network.client.logger.warn(
          `[request] Attempt ${attempt}: Received status ${res.status} from ${url}`,
        );
      }
    } catch (error: unknown) {
      network.client.logger.warn(
        `[request] Attempt ${attempt} failed with exception: ${error}`,
      );
    }

    if (attempt < MAX_ATTEMPTS) {
      await network.delay(1000 * attempt); 
    }
  }

  const errorMsg = `[request] Failed after ${MAX_ATTEMPTS} attempts: ${url}`;
  network.client.logger.error(errorMsg, "error");

  return {
    status: "ERROR",
    status_message: "NETWORK_REQUEST_FAILED",
    detail: errorMsg,
  };
}

export async function sendPayload(
  network: Network,
  datas: SendPayloadInputs,
): Promise<any> {
  try {
    if (!network.apiUrl) {
      network.client.logger.debug(
        "[sendPayload] API URL not set, fetching DCs...",
      );
      const dcSuccess = await getDcs(network);
      if (!dcSuccess) {
        throw new Error("Failed to initialize DC URLs");
      }
    }

    while (!network.apiUrl) {
      network.client.logger.debug("[sendPayload] Waiting for API URL...");
      await network.delay(500);
    }

    const { auth, decode_auth, key, privateKey } = network.client;

    if (!key) {
      network.client.logger.error(
        "[sendPayload] Encryption key is missing. Cannot send payload.",
        "error",
      );
      return { status_message: "MISSING_KEY" };
    }

    const credentialsKey = datas.tmp_session ? "tmp_session" : "auth";
    const credentialsValue = datas.tmp_session ? auth : decode_auth;

    if (!credentialsValue) {
      network.client.logger.error(
        `[sendPayload] Credentials (${credentialsKey}) are missing.`,
        "error",
      );
      return { status_message: "MISSING_CREDENTIALS" };
    }

    const dataPayload = JSON.stringify({
      client: network.defaultPlatform,
      method: datas.method,
      input: datas.input,
    });

    network.client.logger.debug(
      `[sendPayload] Encrypting payload for method: ${datas.method}`,
    );

    const encryptedData = Crypto.encrypt(dataPayload, key);

    const payload: Record<string, any> = {
      api_version: "6",
      data_enc: encryptedData,
      [credentialsKey]: credentialsValue,
    };

    if (!datas.tmp_session && privateKey) {
      payload.sign = Crypto.sign(payload.data_enc, privateKey);
      network.client.logger.debug("[sendPayload] Payload signed successfully.");
    } else if (!datas.tmp_session && !privateKey) {
      network.client.logger.warn(
        "[sendPayload] Private key missing for non-tmp session. Signature omitted.",
      );
    }

    network.client.logger.debug(
      `[sendPayload] Sending request to ${network.apiUrl}`,
    );
    return await network.request(network.apiUrl, payload);
  } catch (error: unknown) {
    network.client.logger.error(
      `[sendPayload] Critical error during payload preparation: ${error}`,
    );
    return { status_message: "INTERNAL_ERROR", detail: String(error) };
  }
}
