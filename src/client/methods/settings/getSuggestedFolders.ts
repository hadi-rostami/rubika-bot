import Client from "../../client";

async function getSuggestedFolders(this: Client) {
  return await this.builder('getSuggestedFolders', {});
}

export default getSuggestedFolders;