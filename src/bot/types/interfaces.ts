import {
  ButtonCalendarTypeEnum,
  ButtonLocationTypeEnum,
  ButtonSelectionTypeEnum,
  ButtonTextboxTypeKeypadEnum,
  ButtonTextboxTypeLineEnum,
  ButtonTypeEnum,
  ChatTypeEnum,
  ForwardedFromEnum,
  LiveLocationStatusEnum,
  MessageSenderEnum,
  PaymentStatusEnum,
  PollStatusEnum,
  UpdateTypeEnum,
} from "./enums";

export interface Chat {
  chat: {
    chat_id: string;
    chat_type: ChatTypeEnum;
    user_id: string;
    first_name: string;
    last_name: string;
    title: string;
    username: string;
  };
}

export interface File {
  file_id: string;
  file_name: string;
  size: string;
}

export interface ForwardedFrom {
  type_from: ForwardedFromEnum;
  message_id: string;
  from_chat_id: string;
  from_sender_id: string;
}

export interface PaymentStatus {
  payment_id: string;
  status: PaymentStatusEnum;
}

export interface MessageTextUpdate {
  message_id: string;
  text: string;
}

export interface Bot {
  bot: {
    bot_id: string;
    bot_title: string;
    avatar: File;
    description: string;
    username: string;
    start_message: string;
    share_url: string;
  };
}

export interface BotCommand {
  command: string;
  description: string;
}

export interface Sticker {
  sticker_id: string;
  file: File;
  emoji_character: string;
}

export interface ContactMessage {
  phone_number: string;
  first_name: string;
  last_name: string;
}

export interface PollStatus {
  state: PollStatusEnum;
  selection_index: number;
  percent_vote_options: number[];
  total_vote: number;
  show_total_votes: boolean;
}

export interface Poll {
  question: string;
  options: string[];
  poll_status: PollStatus;
}

export interface Location {
  longitude: string;
  latitude: string;
}

export interface LiveLocation {
  start_time: string;
  live_period: number;
  current_location: Location;
  user_id: string;
  status: LiveLocationStatusEnum;
  last_update_time: string;
}

export interface ButtonSelectionItem {
  text: string;
  image_url: string;
  type: ButtonSelectionTypeEnum;
}

export interface ButtonSelection {
  selection_id: string;
  search_type: string;
  get_type: string;
  items: ButtonSelectionItem[];
  is_multi_selection: boolean;
  columns_count: string;
  title: string;
}

export interface ButtonCalendar {
  default_value?: string;
  type: ButtonCalendarTypeEnum;
  min_year: string;
  max_year: string;
  title: string;
}

export interface ButtonNumberPicker {
  min_value: string;
  max_value: string;
  default_value?: string;
  title: string;
}

export interface ButtonStringPicker {
  items: string[];
  default_value?: string;
  title?: string;
}

export interface ButtonTextbox {
  type_line: ButtonTextboxTypeLineEnum;
  type_keypad: ButtonTextboxTypeKeypadEnum;
  place_holder?: string;
  title?: string;
  default_value?: string;
}

export interface ButtonLocation {
  default_pointer_location: Location;
  default_map_location: Location;
  type: ButtonLocationTypeEnum;
  title?: string;
  location_image_url: string;
}

export interface AuxData {
  start_id: string;
  button_id: string;
}

export interface Button {
  id: string;
  type: ButtonTypeEnum;
  button_text: string;
  button_selection?: ButtonSelection;
  button_calendar?: ButtonCalendar;
  button_number_picker?: ButtonNumberPicker;
  button_string_picker?: ButtonStringPicker;
  button_location?: ButtonLocation;
  button_textbox?: ButtonTextbox;
}

export interface KeypadRow {
  buttons: Button[];
}

export interface Keypad {
  rows: KeypadRow[];
  resize_keyboard?: boolean;
  on_time_keyboard?: boolean;
}

export interface InlineKeypad {
  rows: KeypadRow[];
}

export interface MessageKeypadUpdate {
  message_id: string;
  inline_keypad: Keypad;
}

export interface MetaData {
  meta_data_parts: {
    from_index: number;
    length: number;
    type: string;
    link?: { url: string };
  }[];
}

export interface Message {
  message_id: string;
  text?: string;
  time: number;
  is_edited: boolean;
  sender_type: MessageSenderEnum;
  sender_id: string;
  aux_data?: AuxData;
  file?: File;
  reply_to_message_id?: string;
  forwarded_from?: ForwardedFrom;
  forwarded_no_link?: string;
  location?: Location;
  sticker?: Sticker;
  contact_message?: ContactMessage;
  poll?: Poll;
  metadata?: MetaData;
  live_location?: LiveLocation;
}

export interface BotInfo {
  bot_id: string;
  bot_title: string;
  avatar: { file_id: string };
  description: string;
  username: string;
  start_message: string;
}

export interface SendMessage {
  message_id: string;
}

export interface UploadFile {
  status: string;
  status_det: string;
  data: { file_id: string };
}
