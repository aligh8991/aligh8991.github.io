import { Component } from "react";

export type IconName =
  | "mail" | "phone" | "arrow" | "menu" | "close" | "code" | "music"
  | "language" | "award" | "check" | "grid" | "user";

const PATHS: Record<IconName, string> = {
  mail: "M3 6h18v12H3z M3 7l9 6 9-6",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  menu: "M4 7h16 M4 12h16 M4 17h16",
  close: "M6 6l12 12 M18 6L6 18",
  code: "M9 8l-5 4 5 4 M15 8l5 4-5 4 M13.5 5l-3 14",
  music: "M9 18V6l10-2v12 M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3z M19 16a3 3 0 1 1-3-3 3 3 0 0 1 3 3z",
  language: "M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18 M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  award: "M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M8.5 13.5L7 21l5-3 5 3-1.5-7.5",
  check: "M5 12.5l4.5 4.5L19 7.5",
  grid: "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 20c0-4 3.5-6 8-6s8 2 8 6",
};

interface Props { name: IconName; className?: string }

/** Single source of truth for every SVG icon on the site. */
export class Icon extends Component<Props> {
  render() {
    const { name, className = "icon" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d={PATHS[name]} />
      </svg>
    );
  }
}
