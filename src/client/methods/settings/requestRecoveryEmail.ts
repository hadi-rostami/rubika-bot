import Client from "../../client";

async function requestRecoveryEmail(
  this: Client,
  password: string,
  recovery_email: string
) {
  return await this.builder("requestRecoveryEmail", {
    password,
    recovery_email,
  });
}

export default requestRecoveryEmail;
