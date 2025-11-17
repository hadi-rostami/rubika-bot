export type MarkdownEntity = {
  type: string;
  from_index: number;
  length: number;
  language?: string;
  mention_text_object_guid?: string;
  mention_text_object_type?: string;
  link?: { type: string; hyperlink_data: { url: string } };
};