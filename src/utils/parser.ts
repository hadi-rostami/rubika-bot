import { MarkdownType, MetaDataPart, MetadataResult } from "../types/utils";

const MENTION_PREFIX_TYPES: Record<string, string> = {
  u: "User",
  g: "Group",
  c: "Channel",
  b: "Bot",
};

function buildUtf16PrefixLengths(text: string): number[] {
  const prefixLengths: number[] = [0];
  let total = 0;
  for (const char of text) {
    total += char.codePointAt(0)! > 0xffff ? 2 : 1;
    prefixLengths.push(total);
  }
  return prefixLengths;
}

const MARKDOWN_RE =
  /(?:^(?:> ?[^\n]*\n?)+)|```([\s\S]*?)```|\*\*([^\n*]+?)\*\*|`([^\n`]+?)`|__([^\n_]+?)__|--([^\n-]+?)--|~~([^\n~]+?)~~|\|\|([^\n|]+?)\|\||\[([^\]]+?)\]\((\S+)\)/gms;

const MARKDOWN_TYPE_SEQUENCE: [string, [MarkdownType, number | null]][] = [
  [">", ["Quote", null]],
  ["```", ["Pre", 1]],
  ["**", ["Bold", 2]],
  ["`", ["Mono", 3]],
  ["__", ["Italic", 4]],
  ["--", ["Underline", 5]],
  ["~~", ["Strike", 6]],
  ["||", ["Spoiler", 7]],
  ["[", ["Link", 8]],
];

export default class Markdown {
  static toMetadata(text: string): MetadataResult {
    const metaDataParts: MetaDataPart[] = [];
    let currentText = text;
    let offset = 0;
    let charOffset = 0;
    const utf16Prefix = buildUtf16PrefixLengths(text);

    let match: RegExpExecArray | null;
    const globalRegex = new RegExp(MARKDOWN_RE, "gms");

    while ((match = globalRegex.exec(text)) !== null) {
      const group = match[0];
      const start = match.index;
      const end = start + group.length;
      const adjustedStart = utf16Prefix[start] - offset;
      const adjustedCharStart = start - charOffset;

      for (const [prefix, [mdType, groupIdx]] of MARKDOWN_TYPE_SEQUENCE) {
        if (group.startsWith(prefix)) {
          let content = "";
          let contentLength = 0;
          let charContentLength = 0;

          if (mdType === "Quote") {
            const quoteLines = group.split("\n");
            const contentLines = quoteLines.map((line) => {
              if (line.startsWith("> ")) return line.slice(2);
              if (line.startsWith(">")) return line.slice(1);
              return line;
            });
            content = contentLines.join("\n");
            charContentLength = content.length;
            contentLength = Markdown.getUtf16Length(content);

            const innerMeta = this.toMetadata(content);
            content = innerMeta.text;
            contentLength = Markdown.getUtf16Length(content);
            charContentLength = content.length;

            if (innerMeta.metadata) {
              for (const part of innerMeta.metadata.meta_data_parts) {
                part.from_index += adjustedStart;
                metaDataParts.push(part);
              }
            }
          } else {
            if (groupIdx !== null && match[groupIdx] !== undefined) {
              content = match[groupIdx] || "";
              const groupStart = match.index + group.indexOf(content);
              const groupEnd = groupStart + content.length;
              contentLength = utf16Prefix[groupEnd] - utf16Prefix[groupStart];
              charContentLength = content.length;

              if (mdType !== "Pre" && mdType !== "Link") {
                const innerMeta = this.toMetadata(content);
                content = innerMeta.text;
                contentLength = Markdown.getUtf16Length(content);
                charContentLength = content.length;

                if (innerMeta.metadata) {
                  for (const part of innerMeta.metadata.meta_data_parts) {
                    part.from_index += adjustedStart;
                    metaDataParts.push(part);
                  }
                }
              }
            } else {
              content = "";
              contentLength = 0;
              charContentLength = 0;
            }
          }

          const metaDataPart: MetaDataPart = {
            type: mdType,
            from_index: adjustedStart,
            length: contentLength,
          };

          // تنظیمات بر اساس نوع
          if (mdType === "Pre") {
            const lines = content.split("\n", 2);
            const language =
              lines.length > 1 && lines[0].trim() ? lines[0].trim() : "";
            metaDataPart.language = language;
            if (language) {
              content = lines.slice(1).join("\n");
              contentLength = Markdown.getUtf16Length(content);
              charContentLength = content.length;
            }
          } else if (mdType === "Link") {
            const url = match[9];
            const mentionType = MENTION_PREFIX_TYPES[url?.[0]] || "hyperlink";

            if (mentionType === "hyperlink") {
              metaDataPart.link_url = url;
              metaDataPart.link = {
                type: mentionType,
                hyperlink_data: { url },
              };
            } else {
              metaDataPart.type = "MentionText";
              metaDataPart.mention_text_object_guid = url;
              metaDataPart.mention_text_user_id = url;
              metaDataPart.mention_text_object_type = mentionType;
            }
          }

          metaDataParts.push(metaDataPart);
          currentText =
            currentText.slice(0, adjustedCharStart) +
            content +
            currentText.slice(end - charOffset);

          const markupLength = utf16Prefix[end] - utf16Prefix[start];
          const charMarkupLength = end - start;
          offset += markupLength - contentLength;
          charOffset += charMarkupLength - charContentLength;

          break;
        }
      }
    }

    return {
      text: currentText.trim(),
      ...(metaDataParts.length > 0 && {
        metadata: { meta_data_parts: metaDataParts },
      }),
    };
  }

  static getUtf16Length(str: string): number {
    return str.split("").reduce((len, char) => {
      return len + (char.codePointAt(0)! > 0xffff ? 2 : 1);
    }, 0);
  }
}
