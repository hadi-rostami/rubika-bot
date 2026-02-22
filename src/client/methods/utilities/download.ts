import Client from '../../client';
import { FileInline } from '../../types/decorators.type';

async function download(
	this: Client,
	file_inline: FileInline,
	chunk = 1054768,
) {
	return await this.network.download(
		file_inline.dc_id,
		file_inline.file_id,
		file_inline.access_hash_rec,
		file_inline.size,
		chunk,
	);
}

export default download;
