import Client from "../../client";

async function getTwoPasscodeStatus(this: Client) {
  return await this.builder('getTwoPasscodeStatus', {});
}

export default getTwoPasscodeStatus;