import Client from "../../client";
import Crypto from "../../crypto";

async function builder(
  this: Client,
  name: string,
  input: object = {},
  tmp_session: boolean = false,
): Promise<any> {
  try {
    if (!this.auth) {
      this.auth = Crypto.secret(32);
      this.logger.debug("Generated new auth secret");
    }

    if (!this.key) {
      const passphrase = Crypto.passphrase(this.auth);
      this.key = Buffer.from(passphrase, "utf8");
      this.logger.debug("Generated encryption key from auth");
    }

    let result = await this.network.send({
      input,
      tmp_session,
      method: name,
    });

    if (!result) {
      this.logger.error(`Network request failed for method: ${name}`, "error");
      return {
        status_message: "NETWORK_ERROR",
        description: "No response from network",
      };
    }

    if (result.data_enc) {
      try {
        const decrypted = Crypto.decrypt(result.data_enc, this.key);
        result = JSON.parse(decrypted);
      } catch (decryptError) {
        this.logger.error(
          `Decryption or JSON parse failed for ${name}: ${decryptError}`,
          "error",
        );
        return {
          status_message: "DECRYPTION_ERROR",
          description: "Failed to decrypt or parse server response",
        };
      }
    } else {
      this.logger.warn(`No data_enc in response for ${name}`);
    }

    const status = result?.status;
    const status_det = result?.status_det || result?.status_message;

    if (status === "OK" && (status_det === "OK" || !status_det)) {
      return { ...result.data, status_message: "OK" };
    }

    this.logger.warn(`API returned error for ${name}: ${status_det || status}`);
    return {
      status_message: status_det || status || "UNKNOWN_ERROR",
      data: result.data || null,
    };
  } catch (error: any) {
    this.logger.error(
      `Critical error in builder for method ${name}: ${error.message || error}`,
      "error",
    );

    return {
      status_message: "INTERNAL_BUILDER_ERROR",
      description:
        error.message || "An unexpected error occurred in the client builder",
    };
  }
}

export default builder;
