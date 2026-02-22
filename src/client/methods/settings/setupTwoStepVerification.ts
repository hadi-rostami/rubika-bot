import Client from "../../client";

async function setupTwoStepVerification(
  this: Client,
  password: string,
  hint?: string,
  recovery_email?: string
) {
  return await this.builder("setupTwoStepVerification", {
    password,
    hint,
    recovery_email,
  });
}

export default setupTwoStepVerification;
