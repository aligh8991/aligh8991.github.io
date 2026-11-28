export type Surface = "night" | "paper";

/** Sets the document title and the colour surface (dark control room or light paper). */
export function enterPage(title: string, surface: Surface = "night"): void {
  document.title = title;
  document.documentElement.dataset.surface = surface;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", surface === "night" ? "#3F0F22" : "#FBF8F6");
}

/** Deterministic pseudo random bars, so each track keeps its own "waveform" between renders. */
export function seededBars(seed: string, count: number): number[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  const out: number[] = [];
  for (let i = 0; i < count; i++) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const env = Math.sin((Math.PI * (i + 0.5)) / count);
    out.push(0.18 + 0.82 * ((h % 1000) / 1000) * (0.35 + 0.65 * env));
  }
  return out;
}

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
