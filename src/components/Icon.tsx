import { Component } from "react";

/** Brand icon set: 24px grid, 1.8 stroke, round caps and joins (see brand book, page 3). */
export const ICON_PATHS = {
  play: "M7 5l12 7-12 7z",
  pause: "M8 5v14 M16 5v14",
  waveform: "M3 11v2 M7 7v10 M11 4v16 M15 8v8 M19 10v4",
  spectrum: "M4 20v-6 M8 20V8 M12 20V4 M16 20v-10 M20 20v-4",
  mic: "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z M5 11a7 7 0 0 0 14 0 M12 18v3 M9 21h6",
  headphones: "M4 15v-3a8 8 0 0 1 16 0v3 M4 15h3v5H5a1 1 0 0 1-1-1z M20 15h-3v5h2a1 1 0 0 0 1-1z",
  speaker: "M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M12 7h.01",
  knob: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z M12 12V7.5",
  layers: "M12 3l9 5-9 5-9-5z M3 12.5l9 5 9-5",
  download: "M12 4v11 M7 11l5 5 5-5 M5 20h14",
  clock: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z M12 8v4l3 2",
  music: "M9 18V6l10-2v12 M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3z M19 16a3 3 0 1 1-3-3 3 3 0 0 1 3 3z",
  mail: "M3 6h18v12H3z M3 7l9 6 9-6",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 20c0-4 3.5-6 8-6s8 2 8 6",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  check: "M5 12.5l4.5 4.5L19 7.5",
  close: "M6 6l12 12 M18 6L6 18",
  menu: "M4 8h16 M4 16h16",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z",
  code: "M9 8l-5 4 5 4 M15 8l5 4-5 4 M13.5 5l-3 14",
  language: "M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18 M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  award: "M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M8.5 13.5L7 21l5-3 5 3-1.5-7.5",
  pin: "M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  print: "M7 9V4h10v5 M7 17H5a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2 M7 14h10v6H7z",
  external: "M14 4h6v6 M20 4l-9 9 M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  soundcloud: "M12 17V8.5a5 5 0 0 1 8 2 3.2 3.2 0 0 1-.5 6.5H12z M9 17v-7 M6 17v-5 M3 17v-3",
  copy: "M9 9h11v11H9z M5 15V4h10",
  grid: "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z",
} as const;

export type IconName = keyof typeof ICON_PATHS;

interface Props { name: IconName; className?: string }

/** Single source of truth for every SVG icon on the site. */
export class Icon extends Component<Props> {
  render() {
    const { name, className = "icon" } = this.props;
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <path d={ICON_PATHS[name]} />
      </svg>
    );
  }
}
