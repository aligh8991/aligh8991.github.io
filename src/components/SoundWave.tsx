import { Component, createRef, PointerEvent } from "react";
import { prefersReducedMotion } from "../lib/page";

const W = 400;
const H = 260;
const MID = 100;
const N = 96;
const BARS = 40;
const BASE = H - 16;

interface Layer { freq: number; amp: number; speed: number; phase: number; color: string; width: number; opacity: number }

/** Four phase-shifted sine layers: burgundy depth, rose pulse, verdigris counterpoint, brass lead. */
const LAYERS: Layer[] = [
  { freq: 1.4, amp: 50, speed: 0.5, phase: 0.0, color: "#B56F88", width: 1.2, opacity: 0.55 },
  { freq: 2.6, amp: 36, speed: -0.8, phase: 1.3, color: "#C0405E", width: 1.2, opacity: 0.75 },
  { freq: 4.2, amp: 22, speed: 1.1, phase: 2.1, color: "#52A08A", width: 1, opacity: 0.6 },
  { freq: 2.0, amp: 42, speed: 0.9, phase: 0.6, color: "#D4AA72", width: 2.2, opacity: 1 },
];

/**
 * Hero artwork: a live oscilloscope drawn in SVG. It breathes on its own,
 * reacts to touch or pointer movement (x = frequency, press = energy),
 * pauses when the tab is hidden, and renders a still frame for reduced motion.
 */
export class SoundWave extends Component {
  private paths = LAYERS.map(() => createRef<SVGPathElement>());
  private bars = Array.from({ length: BARS }, () => createRef<SVGRectElement>());
  private head = createRef<SVGLineElement>();
  private clock = createRef<HTMLSpanElement>();
  private raf = 0;
  private start = 0;
  private energy = 0;
  private freqShift = 0;
  private lastStamp = "";

  private draw(t: number) {
    const energy = this.energy;
    const ampMul = 0.85 + energy * 0.55 + 0.12 * Math.sin(t * 0.7);
    LAYERS.forEach((l, i) => {
      let d = "";
      for (let k = 0; k <= N; k++) {
        const x = (k / N) * W;
        const env = Math.pow(Math.sin((Math.PI * k) / N), 1.15);
        const y = MID + l.amp * ampMul * env * Math.sin((2 * Math.PI * l.freq * (1 + this.freqShift) * x) / W + l.phase + t * l.speed * 2);
        d += (k === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1);
      }
      this.paths[i].current?.setAttribute("d", d);
    });
    this.bars.forEach((r, i) => {
      const a = Math.abs(Math.sin(i * 0.52 + t * 2.1) * 0.55 + Math.sin(i * 0.23 - t * 1.3) * 0.45);
      const h = 4 + 44 * a * (0.55 + energy * 0.6);
      const el = r.current;
      if (el) { el.setAttribute("y", (BASE - h).toFixed(1)); el.setAttribute("height", h.toFixed(1)); }
    });
    const p = (t % 9) / 9;
    const hx = (p * W).toFixed(1);
    this.head.current?.setAttribute("x1", hx);
    this.head.current?.setAttribute("x2", hx);
    const total = Math.floor(t * 25);
    const stamp = `${String(Math.floor(total / 1500) % 60).padStart(2, "0")}:${String(Math.floor(total / 25) % 60).padStart(2, "0")}:${String(total % 25).padStart(2, "0")}`;
    if (this.clock.current && stamp !== this.lastStamp) { this.clock.current.textContent = stamp; this.lastStamp = stamp; }
  }

  private tick = (now: number) => {
    if (!this.start) this.start = now;
    this.energy *= 0.965;
    this.freqShift *= 0.985;
    this.draw((now - this.start) / 1000);
    this.raf = requestAnimationFrame(this.tick);
  };

  private onVisibility = () => {
    cancelAnimationFrame(this.raf);
    if (!document.hidden && !prefersReducedMotion()) this.raf = requestAnimationFrame(this.tick);
  };

  componentDidMount() {
    this.draw(1.2);
    if (prefersReducedMotion()) return;
    this.raf = requestAnimationFrame(this.tick);
    document.addEventListener("visibilitychange", this.onVisibility);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
    document.removeEventListener("visibilitychange", this.onVisibility);
  }

  private onPointer = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    this.freqShift = ((e.clientX - r.left) / r.width - 0.5) * 0.7;
    this.energy = 1;
  };

  render() {
    return (
      <div className="wave" onPointerMove={this.onPointer} onPointerDown={this.onPointer}>
        <div className="wave__hud" aria-hidden="true">
          <span>CH 1–4</span>
          <span ref={this.clock}>00:00:00</span>
          <span>48 kHz</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" role="img"
          aria-label="Animated sound waves in burgundy, rose, green and brass. Touch to change the frequency.">
          {[40, 70, 100, 130, 160].map((y) => (
            <line key={y} x1="0" x2={W} y1={y} y2={y} stroke="#F1E8E4" strokeOpacity={y === MID ? 0.22 : 0.07} strokeDasharray={y === MID ? "0" : "2 6"} />
          ))}
          {Array.from({ length: 21 }, (_, i) => (
            <line key={i} x1={i * 20} x2={i * 20} y1={MID - (i % 5 === 0 ? 7 : 3)} y2={MID + (i % 5 === 0 ? 7 : 3)} stroke="#F1E8E4" strokeOpacity=".3" />
          ))}
          {LAYERS.map((l, i) => (
            <path key={i} ref={this.paths[i]} fill="none" stroke={l.color} strokeWidth={l.width}
              strokeOpacity={l.opacity} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          ))}
          <line ref={this.head} x1="0" x2="0" y1="16" y2={BASE} stroke="#D4AA72" strokeOpacity=".55" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          {this.bars.map((r, i) => (
            <rect key={i} ref={r} x={i * 10 + 1.5} width="5" height="4" y={BASE - 4} rx="2.5" fill="#832748" />
          ))}
        </svg>
      </div>
    );
  }
}
