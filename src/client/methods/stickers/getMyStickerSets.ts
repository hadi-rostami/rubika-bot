import Client from '../../client';

async function getMyStickerSets(this: Client) {
  return await this.builder('getMyStickerSets', {});
}

export default getMyStickerSets;