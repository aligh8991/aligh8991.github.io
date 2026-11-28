import { Component } from "react";
import { Icon } from "./Icon";
import { Track } from "../models/Track";
import { seededBars } from "../lib/page";

interface Props { track: Track; index: number }
interface State { loaded: boolean }

/**
 * Click-to-load SoundCloud player. The card is light and fast; the official embed
 * (and its cookies) only load once the visitor presses play.
 */
export class TrackCard extends Component<Props, State> {
  state: State = { loaded: false };

  render() {
    const { track, index } = this.props;
    const bars = seededBars(track.title + track.url, 56);
    const num = String(index + 1).padStart(2, "0");

    return (
      <article className={`track ${track.kind === "profile" ? "track--wide" : ""}`}>
        <header className="track__head">
          <span className="track__num">{num}</span>
          <div>
            <h3 className="track__title">{track.title}</h3>
            <p className="track__meta">{track.role}{track.year ? ` · ${track.year}` : ""}</p>
          </div>
        </header>

        {this.state.loaded ? (
          <iframe className="track__frame" title={`SoundCloud player: ${track.title}`} height={track.embedHeight}
            allow="autoplay" src={track.embedSrc(true)} />
        ) : (
          <button className="track__stage" type="button" onClick={() => this.setState({ loaded: true })}
            aria-label={`Play ${track.title} on SoundCloud`}>
            <svg className="track__bars" viewBox="0 0 224 56" preserveAspectRatio="none" aria-hidden="true">
              {bars.map((b, i) => (
                <rect key={i} x={i * 4} y={28 - (b * 26)} width="2.4" height={b * 52} rx="1.2" style={{ animationDelay: `${(i % 14) * 70}ms` }} />
              ))}
            </svg>
            <span className="track__play"><Icon name="play" /></span>
            <span className="track__hint">Tap to play</span>
          </button>
        )}

        <footer className="track__foot">
          <ul className="chips">{track.tags.map((t) => <li className="chip" key={t}>{t}</li>)}</ul>
          <a className="link-arrow" href={track.url} target="_blank" rel="noopener noreferrer">
            <span>SoundCloud</span><Icon name="external" />
          </a>
        </footer>
      </article>
    );
  }
}
