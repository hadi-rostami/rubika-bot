import Client from "../../client";

async function run(this: Client): Promise<void> {
  while (!this.initialize) {
    await this.network.delay(2000);
  }

  await this.network.getUpdates();
}

export default run;
