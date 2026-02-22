import Client from '../../client';

async function userIsAdmin(
	this: Client,
	object_guid: string,
	user_guid: string,
) {
	let hasContinue = true;
	let nextStartID = null;

	while (hasContinue) {
		let result: any = object_guid.startsWith('g0')
			? await this.getGroupAdminMembers(object_guid, nextStartID)
			: await this.getChannelAdminMembers(object_guid, nextStartID);

		hasContinue = result.has_continue;
		nextStartID = result.next_start_id;

		for (let user of result.in_chat_members)
			if (user_guid === user.member_guid) return true;
	}

	return false;
}

export default userIsAdmin;
