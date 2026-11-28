import { Component } from "react";
import { Button } from "../components/Button";
import { Icon, IconName } from "../components/Icon";
import { Logo } from "../components/Logo";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/content";
import { enterPage } from "../lib/page";

interface Swatch { name: string; hex: string; dark?: boolean }
interface State { copied: string }

const SCALE: { title: string; note: string; swatches: Swatch[] }[] = [
  { title: "Burgundy", note: "Base. Surfaces, buttons, links, headings.", swatches: [
    { name: "100", hex: "#F2E3E8" }, { name: "300", hex: "#CF9DB0" }, { name: "500", hex: "#9A4668", dark: true },
    { name: "700", hex: "#6B1F3A", dark: true }, { name: "900", hex: "#3F0F22", dark: true } ] },
  { title: "Verdigris", note: "Counterpoint. Waveforms, success, data.", swatches: [
    { name: "100", hex: "#D6EAE3" }, { name: "300", hex: "#7FBBA9" }, { name: "500", hex: "#2F846F", dark: true },
    { name: "700", hex: "#17544A", dark: true }, { name: "900", hex: "#0A2823", dark: true } ] },
  { title: "Brass", note: "Accent. One small highlight at a time.", swatches: [
    { name: "100", hex: "#F4E6D1" }, { name: "300", hex: "#D4AA72" }, { name: "500", hex: "#A27138", dark: true },
    { name: "700", hex: "#6E4D2C", dark: true }, { name: "900", hex: "#382718", dark: true } ] },
  { title: "Neutrals", note: "Tinted warm. Never pure white or pure black.", swatches: [
    { name: "paper", hex: "#FBF8F6" }, { name: "line", hex: "#E6DADE" }, { name: "ink", hex: "#241A1E", dark: true },
    { name: "night 800", hex: "#261A1F", dark: true }, { name: "night 950", hex: "#140D10", dark: true } ] },
];

const ICONS: IconName[] = ["play", "pause", "waveform", "spectrum", "mic", "headphones", "speaker", "knob", "layers", "clock", "music", "download"];

const VOICE_DO = ["Short sentences", "Technical terms used correctly", "Calm verbs: listen, shape, layer, mix, render", "Show the work, explain little"];
const VOICE_DONT = ["Hype, superlatives and slogans", "Neon, club or festival imagery", "Literal piano keys or cartoon notes", "More than one accent colour per component"];

/** Brand page: a condensed, live version of the "Resonant Burgundy" brand book. */
export class Brand extends Component<object, State> {
  state: State = { copied: "" };
  private timer?: number;

  componentDidMount() { enterPage(`Brand | ${profile.name}`, "paper"); }
  componentWillUnmount() { window.clearTimeout(this.timer); }

  private copy = async (hex: string) => {
    try { await navigator.clipboard.writeText(hex); } catch { /* clipboard unavailable: the hex stays visible */ }
    this.setState({ copied: hex });
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => this.setState({ copied: "" }), 1400);
  };

  render() {
    const { copied } = this.state;
    return (
      <div className="page-enter">
        <section className="page-head">
          <div className="container">
            <p className="eyebrow">Brand · 02</p>
            <h1>Resonant <em>Burgundy.</em></h1>
            <p className="lead">The identity behind this site: warm like a valve amp, precise like a meter, quiet enough to let the work be heard.</p>
          </div>
        </section>

        <section className="section section--tight" aria-labelledby="logo-title">
          <div className="container">
            <Reveal><h2 id="logo-title" className="h-sm">Logo</h2></Reveal>
            <Reveal>
              <div className="logo-stage">
                <Logo size={160} />
                <ul className="why">
                  <li><b>01</b><span>The crossbar is a signal: two cycles of a sine wave.</span></li>
                  <li><b>02</b><span>The apex is a peak, like a transient on the meter.</span></li>
                  <li><b>03</b><span>The legs mirror each other, a nod to stereo balance.</span></li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="variants">
                <figure style={{ background: "#FBF8F6" }}><Logo size={64} /><figcaption>On paper</figcaption></figure>
                <figure style={{ background: "#3F0F22" }}><Logo size={64} tile={false} /><figcaption style={{ color: "#CF9DB0" }}>On dark</figcaption></figure>
                <figure style={{ background: "#F2E3E8" }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                    <path d="M18 47 32 16l14 31" fill="none" stroke="#6B1F3A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.4 38q2.4-7.2 4.8 0t4.8 0 4.8 0 4.8 0" fill="none" stroke="#8A6238" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <figcaption>Glyph only</figcaption>
                </figure>
              </div>
            </Reveal>
            <div className="btn-row">
              <Button variant="secondary" icon="download" href="./logo.svg" download>Logo SVG</Button>
              <Button variant="ghost" icon="external" href="./brand-book.html" external>Full brand book</Button>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="colour-title">
          <div className="container">
            <Reveal><h2 id="colour-title" className="h-sm">Colour</h2><p className="lead">Tap a swatch to copy its hex value.</p></Reveal>
            {SCALE.map((g) => (
              <Reveal key={g.title}>
                <div className="scale">
                  <div className="scale__head"><h3>{g.title}</h3><p>{g.note}</p></div>
                  <div className="scale__row">
                    {g.swatches.map((s) => (
                      <button key={s.hex} type="button" className={`swatch ${s.dark ? "swatch--dark" : ""}`}
                        style={{ background: s.hex }} onClick={() => this.copy(s.hex)} aria-label={`Copy ${g.title} ${s.name}, ${s.hex}`}>
                        <span>{s.name}</span>
                        <code>{copied === s.hex ? "Copied" : s.hex}</code>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section--rule" aria-labelledby="type-title">
          <div className="container">
            <Reveal><h2 id="type-title" className="h-sm">Typography</h2></Reveal>
            <Reveal>
              <div className="type">
                <div><span className="type__label">Display · Fraunces</span><p className="type__d">Aa Sound</p></div>
                <div><span className="type__label">Body · Manrope</span><p className="type__b">Aa Listen</p></div>
                <div><span className="type__label">Data · JetBrains Mono</span><p className="type__m">-14 LUFS · 48 kHz</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section--rule" aria-labelledby="icons-title">
          <div className="container">
            <Reveal><h2 id="icons-title" className="h-sm">Icons</h2><p className="lead">Monoline, 24px grid, 1.8 stroke, round caps and joins.</p></Reveal>
            <Reveal>
              <ul className="icon-grid">
                {ICONS.map((n) => (
                  <li key={n}><Icon name={n} className="icon icon--lg" /><span>{n}</span></li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section section--rule" aria-labelledby="voice-title">
          <div className="container">
            <Reveal><h2 id="voice-title" className="h-sm">Voice</h2><p className="lead">A craftsperson, not a showman. Confident, quiet, exact.</p></Reveal>
            <div className="voice">
              <Reveal>
                <div className="voice__col voice__col--do">
                  <h3>Do</h3>
                  <ul>{VOICE_DO.map((v) => <li key={v}><Icon name="check" />{v}</li>)}</ul>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="voice__col voice__col--dont">
                  <h3>Avoid</h3>
                  <ul>{VOICE_DONT.map((v) => <li key={v}><Icon name="close" />{v}</li>)}</ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
