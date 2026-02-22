import Client from '../../client';

async function uploadAvatar(this: Client, object_guid: string, image: string) {
	if (
		['me', 'cloud', 'self'].includes(object_guid.toLocaleLowerCase()) &&
		this.userGuid
	)
		object_guid = this.userGuid;

	const upload = await this.network.uploadFile(image);

	return await this.builder('uploadAvatar', {
		object_guid,
		thumbnail_file_id: upload.file_id,
		main_file_id: upload.file_id,
	});
}

export default uploadAvatar;
