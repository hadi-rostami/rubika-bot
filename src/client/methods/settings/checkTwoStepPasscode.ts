import Client from "../../client";

async function checkTwoStepPasscode(this: Client, password: string) {
  return await this.builder("checkTwoStepPasscode", { password });
}

export default checkTwoStepPasscode;
