class Utils {
  static Code = (text: string): string => "`" + text.trim() + "`";
  static Bold = (text: string): string => `**${text.trim()}**`;
  static Italic = (text: string): string => `__${text.trim()}__`;
  static Spoiler = (text: string): string => `||${text.trim()}||`;
  static Strike = (text: string): string => `~~${text.trim()}~~`;
  static Underline = (text: string): string => `--${text.trim()}--`;
  static Quote = (text: string): string => `^^${text.trim()}^^`;
  static HyperLink = (text: string, link: string): string =>
    `[${text.trim()}](${link.trim()})`;
}

export default Utils;
