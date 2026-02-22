interface FileInline {
	file_id: number;
	mime: string;
	dc_id: number;
	access_hash_rec: string;
	file_name: string;
	width?: number;
	height?: number;
	size: number;
	type: string;
	time?: number;
	music_performer?: string;
	is_round?: boolean;
	is_spoil?: boolean;
}

interface ContactMessage {
	phone_number: string;
	first_name: string;
	last_name: string;
	user_guid: string;
	vcard: string;
}

interface LiveData {
	live_id: string;
	thumb_inline: string;
	access_token: string;
	live_status: {
		status: string;
		play_count: number;
		allow_comment: boolean;
		can_play: boolean;
		timestamp: string;
	};
}

interface Location {
	longitude: number;
	latitude: number;
	map_view: {
		tile_side_count: number;
		tile_urls: string[];
		x_loc: number;
		y_loc: number;
	};
}

interface EventData {
	type: string;
	performer_object: {
		type: string;
		object_guid: string;
	};
	group_voice_chat_duration: number;
	title: string;
	avatar_thumbnail: Avatar;
	avatar: Avatar;
}

interface Avatar {
	file_id: string;
	mime: string;
	dc_id: string;
	access_hash_rec: string;
}

interface PollData {
	poll_id: string;
	question: string;
	options: string[];
	poll_status: {
		state: string;
		selection_index: number;
		percent_vote_options: number[];
		total_vote: number;
		show_total_votes: boolean;
	};
	is_anonymous: boolean;
	type: string;
	allows_multiple_answers: boolean;
}

interface MetaData {
	meta_data_parts: {
		from_index: number;
		length: number;
		type: string;
		link?: { url: string };
	}[];
}

interface Message {
	message_id: string;
	text?: string;
	time: string;
	is_edited: boolean;
	type: string;
	reply_to_message_id: string;
	author_type: string;
	author_title: string;
	author_object_guid: string;
	allow_transcription?: boolean;
	file_inline?: FileInline;
	contact_message: ContactMessage;
	live_data: LiveData;
	poll: PollData;
	location: Location;
	event_data: EventData;
	forwarded_from?: {
		type_from: string;
		message_id: string;
		object_guid: string;
	};
	metadata?: MetaData;
	count_seen?: string;
	thumb_inline?: string;
}

interface MessageUpdate {
	message_id: string;
	action: string;
	message: Message;
	updated_parameters: any[];
	timestamp: string;
	prev_message_id: string;
	object_guid: string;
	type: string;
	state: string;
	client_guid: string;
	is_scheduled: boolean
}

interface ChatUpdates {
	object_guid: string;
	action: string;
	chat: Chat;
	updated_parameters: string[];
	timestamp: string;
	type: string;
}

interface ChatLastMessage {
	message_id: string;
	type: string;
	text: string;
	author_object_guid?: string;
	is_mine: boolean;
	author_title?: string;
	author_type?: string;
}

export interface Chat {
	time_string: string;
	last_message: ChatLastMessage;
	last_seen_peer_mid?: string;
	last_seen_my_mid?: string;
	status?: string;
	time: number;
	last_message_id: string;
	group_voice_chat_id?: string;
}

interface ShowActivities {
	type: string;
	object_guid: string;
	object_type: string;
	user_activity_guid: string;
}

interface ShowNotifications {
	notification_id: string;
	type: string;
	title: string;
	text: string;
	image_file_id?: number;
	message_data: MessageData;
}

interface MessageData {
	object_guid: string;
	object_type: string;
	message_id: number;
	sender_guid?: string;
}

export {
	MessageUpdate,
	ChatUpdates,
	ShowActivities,
	ShowNotifications,
	Message,
	FileInline,
	MessageData,
};

export default MessageUpdate;
