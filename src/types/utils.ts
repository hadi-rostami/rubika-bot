export type MarkdownType =
  | "Quote"
  | "Pre"
  | "Bold"
  | "Mono"
  | "Italic"
  | "Underline"
  | "Strike"
  | "Spoiler"
  | "Link"
  | "MentionText";

export interface MetaDataPart {
  type: MarkdownType;
  from_index: number;
  length: number;
  language?: string;
  link_url?: string;
  link?: {
    type: string;
    hyperlink_data?: { url: string };
  };
  mention_text_object_guid?: string;
  mention_text_user_id?: string;
  mention_text_object_type?: string;
}


export interface MetadataResult {
  text: string;
  metadata?: {
    meta_data_parts: MetaDataPart[];
  };
}