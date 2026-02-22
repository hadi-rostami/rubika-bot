import Client from '../../client';

async function deleteMessagebyCount(
	this: Client,
	object_guid: string,
	message_id: string,
	count: number,
	sort: 'FromMin' | 'FromMax' = 'FromMax',
	filter_type?:
		| 'Music'
		| 'File'
		| 'Media'
		| 'Voice'
		| 'Gif'
		| 'Groups'
		| 'Channels',
) {
	const countLoop = Math.ceil(count / 25);
	const tasks: Promise<any>[] = [];

	for (let index = 1; index <= countLoop; index++) {
		const res = await this.getMessages(
			object_guid,
			message_id,
			'25',
			sort,
			filter_type,
		);

		if (!res.has_continue) break;

		message_id = res.new_max_id;
		const messagesID = res.messages.map((message: any) => message.message_id);
		tasks.push(
			this.deleteMessages(
				object_guid,
				index !== countLoop
					? messagesID
					: messagesID.slice(0, count - (countLoop - 1) * 25),
			),
		);
	}

	await Promise.allSettled(tasks);

	return true;
}

export default deleteMessagebyCount;
