import { MarkdownEntity } from "../types/utils";

class Markdown {
  static markdownRegExp =
    /(^|\s|\n)(````?)([\s\S]+?)(````?)([\s\n\.,:?!;]|$)|(^|\s)(`|\*\*|__|~~|--|\|\||\^\^)([^\n]+?)\7([\s\.,:?!;]|$)|@([a-zA-Z0-9]+)\s*\((.+?)\)|\[(.+?)\]\((.+?)\)/m;

  static markdownEntities: Record<string, string> = {
    "`": "Mono",
    "**": "Bold",
    __: "Italic",
    "||": "Spoiler",
    "~~": "Strike",
    "--": "Underline",
    "^^": "Quote",
  };

  static toMetadata(text: string): {
    text: string;
    metadata?: { meta_data_parts: MarkdownEntity[] };
  } {
    let entities: MarkdownEntity[] = [];
    let match: RegExpMatchArray | null;
    let remainingText = text;
    let parsedTextParts: string[] = [];
    let offset = 0;

    while ((match = remainingText.match(this.markdownRegExp))) {
      const matchIndex = offset + (match.index || 0);
      parsedTextParts.push(remainingText.substring(0, match.index!));
      let matchedContent = match[3] || match[8] || match[11] || match[13];

      if (matchedContent) {
        offset -= matchedContent.length;
        matchedContent = matchedContent.trim();
        offset += matchedContent.length;

        if (/^`*$/.test(matchedContent)) {
          parsedTextParts.push(match[0]);
        } else if (match[3]) {
          if (match[5] === "\n") {
            match[5] = "";
            offset -= 1;
          }
          parsedTextParts.push(match[1] + matchedContent + match[5]);
          entities.push({
            type: "Pre",
            language: "",
            from_index: matchIndex + match[1].length,
            length: matchedContent.length,
          });
          offset -= match[2].length + match[4].length;
        } else if (match[7]) {
          parsedTextParts.push(match[6] + matchedContent + match[9]);
          entities.push({
            type: this.markdownEntities[match[7]],
            from_index: matchIndex + match[6].length,
            length: matchedContent.length,
          });
          offset -= 2 * match[7].length;
        } else if (match[11]) {
          parsedTextParts.push(matchedContent);
          entities.push({
            type: "MentionText",
            mention_text_object_guid: match[10],
            from_index: matchIndex,
            length: matchedContent.length,
            mention_text_object_type: "User",
          });
          offset -= match[0].length - matchedContent.length;
        } else if (match[12]) {
          const [label, url] = [match[12], match[13]];

          let mentionType: string | undefined;
          if (url.length === 32) {
            if (url.startsWith("u")) mentionType = "User";
            else if (url.startsWith("g")) mentionType = "Group";
            else if (url.startsWith("c")) mentionType = "Channel";
          }

          parsedTextParts.push(label);
          const metaDataPart: MarkdownEntity = {
            type: mentionType ? "MentionText" : "Link",
            from_index: matchIndex,
            length: label.length,
          };

          if (mentionType) {
            metaDataPart.mention_text_object_guid = url;
            metaDataPart.mention_text_object_type = mentionType;
          } else {
            metaDataPart.link = { type: "hyperlink", hyperlink_data: { url } };
          }

          entities.push(metaDataPart);
          offset -= match[0].length - label.length;
        }

        remainingText = remainingText.substring(match.index! + match[0].length);
        offset += match.index! + match[0].length;
      }
    }

    parsedTextParts.push(remainingText);
    let resultText = parsedTextParts.join("");
    if (!resultText.replace(/\s+/g, "").length) {
      resultText = text;
      entities.splice(0, entities.length);
    }
    if (!entities.length) {
      resultText = resultText.trim();
    }

    let returnData: {
      text: string;
      metadata?: { meta_data_parts: MarkdownEntity[] };
    } = {
      text: resultText,
    };

    if (entities.length > 0)
      returnData.metadata = { meta_data_parts: entities };

    return returnData;
  }
}

export default Markdown;
