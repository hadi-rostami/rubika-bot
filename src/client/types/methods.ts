import { Message } from "./decorators.type";

type OnlineTimeType =
  | "Exact"
  | "Recently"
  | "LastWeek"
  | "LastMonth"
  | "Offline";
type FileId = string | number;

interface AvatarThumbnail {
  file_id: FileId;
  mime: string;
  dc_id: string;
  access_hash_rec: string;
}

interface MusicTrack {
  file_id: FileId;
  mime: string;
  dc_id: string;
  access_hash_rec: string;
  file_name: string;
  width: number;
  height: number;
  time: number;
  size: number;
  type: string;
  music_performer: string;
}

interface BaseUser {
  user_guid: string;
  first_name: string;
  last_name: string;
  phone: string;
  username?: string;
  avatar_thumbnail?: AvatarThumbnail;
  last_online: number;
  bio: string;
  is_deleted: boolean;
  is_verified: boolean;
  online_time: { type: OnlineTimeType | string; exact_time?: number };
  birth_date?: string;
  saved_music_last_track?: MusicTrack;
}

export interface GetUserInfoResponse {
  user: BaseUser;
  chat: {
    object_guid: string;
    access: string[];
    count_unseen: number;
    is_mute: boolean;
    is_pinned: boolean;
    time_string: string;
    last_message?: {
      message_id: string;
      type: string;
      text?: string;
      author_object_guid: string;
      is_mine: boolean;
      author_title: string;
      author_type: string;
    };
    last_seen_my_mid: string;
    last_seen_peer_mid: string;
    status: string;
    time: number;
    abs_object: {
      object_guid: string;
      type: string;
      first_name?: string;
      last_name?: string;
      avatar_thumbnail?: AvatarThumbnail;
      is_verified: boolean;
      is_deleted: boolean;
    };
    is_blocked: boolean;
    last_message_id: string;
    last_deleted_mid?: string;
    has_schedule: boolean;
    auto_delete: string;
  };
  timestamp: string;
  can_receive_call: boolean;
  can_video_call: boolean;
  user_additional_info: {
    is_in_contact: boolean;
    can_receive_call: boolean;
    can_video_call: boolean;
    photo_changed_time?: number;
  };
}

export interface SendCodeResponse {
  phone_code_hash: string;
  status: "OK" | string;
  code_digits_count: number;
  has_confirmed_recovery_email: boolean;
  no_recovery_alert?: string;
  send_type: "SMS" | string;
  hint_pass_key: string
}

export interface SignInResponse {
  status: "OK" | string;
  auth: string;
  user: BaseUser;
  timestamp: string;
  two_step_enabled?: boolean;
}

export interface AddChannelResponse {
  channel: {
    channel_guid: string;
    channel_title: string;
    count_members: number;
    description: string;
    is_deleted: boolean;
    is_verified: boolean;
    channel_type: string;
    sign_messages: boolean;
    chat_reaction_setting: {
      reaction_type: string;
    };
    is_restricted_content: boolean;
  };
  chat_update: {
    object_guid: string;
    action: string;
    chat: {
      object_guid: string;
      access: string[];
      count_unseen: number;
      is_mute: boolean;
      is_pinned: boolean;
      time_string: string;
      last_message?: {
        message_id: string;
        type: string;
        text: string;
        is_mine: boolean;
      };
      last_seen_my_mid: string;
      last_seen_peer_mid: string;
      status: string;
      time: number;
      abs_object: {
        object_guid: string;
        type: string;
        title: string;
        is_verified: boolean;
        is_deleted: boolean;
      };
      is_blocked: boolean;
      last_message_id: string;
      last_deleted_mid?: string;
      show_ask_spam?: boolean;
      auto_delete: string;
    };
    updated_parameters: any[];
    timestamp: string;
    type: string;
  };
  message_update?: Message;
  timestamp: string;
}

export interface GetChannelInfoResponse {
  channel: {
    channel_guid: string;
    channel_title: string;
    avatar_thumbnail?: AvatarThumbnail;
    count_members: number;
    description: string;
    username?: string;
    is_deleted: boolean;
    is_verified: boolean;
    share_url?: string;
    channel_type: string;
    sign_messages: boolean;
    chat_reaction_setting: {
      reaction_type: string;
      selected_reactions: string[];
    };
    is_restricted_content: boolean;
  };
  chat: {
    object_guid: string;
    access: string[];
    count_unseen: number;
    is_mute: boolean;
    is_pinned: boolean;
    time_string: string;
    last_message?: {
      message_id: string;
      type: string;
      text: string;
      is_mine: boolean;
    };
    last_seen_my_mid: string;
    last_seen_peer_mid: string;
    status: string;
    time: number;
    abs_object: {
      object_guid: string;
      type: string;
      title?: string;
      avatar_thumbnail?: AvatarThumbnail;
      is_verified: boolean;
      is_deleted: boolean;
    };
    is_blocked: boolean;
    last_message_id: string;
    last_deleted_mid?: string;
    show_ask_spam?: boolean;
    is_archived?: boolean;
    auto_delete: string;
  };
  timestamp: string;
}


