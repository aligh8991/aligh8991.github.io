export type TrackKind = "track" | "profile";

export interface TrackData {
  title: string;
  /** Public SoundCloud URL of a track, a playlist (set) or a profile. */
  url: string;
  kind?: TrackKind;
  role: string;
  year?: string;
  tags?: string[];
}

/** A SoundCloud item that can be played inside the site through the official embed player. */
export class Track {
  public readonly kind: TrackKind;
  constructor(private readonly data: TrackData) { this.kind = data.kind ?? "track"; }

  get title() { return this.data.title; }
  get url() { return this.data.url; }
  get role() { return this.data.role; }
  get year() { return this.data.year; }
  get tags() { return this.data.tags ?? []; }

  /** Profiles and playlists show a track list, so they need a taller player. */
  get embedHeight(): number { return this.kind === "profile" || this.data.url.includes("/sets/") ? 450 : 166; }

  embedSrc(autoPlay: boolean): string {
    const q = new URLSearchParams({
      url: this.data.url,
      color: "#832748",
      auto_play: String(autoPlay),
      hide_related: "true",
      show_comments: "false",
      show_user: "true",
      show_reposts: "false",
      show_teaser: "false",
      visual: "false",
    });
    return `https://w.soundcloud.com/player/?${q.toString()}`;
  }
}
