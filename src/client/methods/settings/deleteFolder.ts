import Client from "../../client";

async function deleteFolder(this: Client, folder_id: string) {
  return await this.builder("deleteFolder", { folder_id });
}

export default deleteFolder;
