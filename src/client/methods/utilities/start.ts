import Client from "../../client";
import Crypto from "../../crypto";
import { prompt } from "../../../utils";
import { ClientSession } from "../../types/session.type";

async function start(this: Client): Promise<void> {
  const DBInformation = this.sessionDb.getSession() as ClientSession | null;

  if (DBInformation) {
    this.auth = DBInformation?.auth;
    this.userGuid = DBInformation.guid;
    this.privateKey = DBInformation.private_key;

    if (typeof DBInformation.agent === "string")
      this.network.userAgent = DBInformation.agent || this.network.userAgent;
  }

  try {
    if (!this.auth) throw Error("[start] Error auth is not set");
    this.key = Buffer.from(Crypto.passphrase(this.auth), "utf8");
    this.decode_auth = Crypto.decode_auth(this.auth);
    const result = await this.getUserInfo();
    this.userGuid = result.user.user_guid;
    this.initialize = true;
  } catch (error) {
    let phone_number: string = await prompt("Phone Number: ");
    let is_phone_number_true = true;

    while (is_phone_number_true) {
      const answer = await prompt(`Is the ${phone_number} correct [y or n]: `);
      if (answer.toLowerCase() === "y") {
        is_phone_number_true = false;
      } else {
        phone_number = await prompt("Phone Number ex -> (09123456789) : ");
      }
    }

    let result = await this.sendCode(phone_number);

    if (result.status == "SendPassKey") {
      while (true) {
        let pass_key = await prompt(`Password [${result.hint_pass_key}] > `);
        result = await this.sendCode(
          (phone_number = phone_number),
          (pass_key = pass_key),
        );

        if (result.status == "OK") break;
      }
    }

    let [publicKey, privateKey] = Crypto.createKeys();

    this.privateKey = privateKey;

    while (true) {
      let phone_code = await prompt("Code: ");

      let response = await this.signIn(
        phone_code,
        phone_number,
        result.phone_code_hash,
        publicKey,
      );

      if (response.status === "OK") {
        response.auth = Crypto.decrypt_RSA_OAEP(this.privateKey, response.auth);
        this.key = Buffer.from(Crypto.passphrase(response.auth), "utf8");
        this.auth = response.auth;
        this.decode_auth = Crypto.decode_auth(this.auth || "");

        this.sessionDb.saveSession({
          phone: response.user.phone,
          auth: this.auth || "",
          guid: response.user.user_guid,
          agent: this.network.userAgent,
          private_key: this.privateKey,
        });

        await this.registerDevice();
        break;
      }
    }

    this.initialize = true;
  }
}

export default start;
