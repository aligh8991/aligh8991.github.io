import { Component } from "react";

interface Props { size?: number; tile?: boolean; className?: string }

/** The "A" mark: two legs meeting at a peak, with a sine wave as the crossbar. Never redraw it. */
export class Logo extends Component<Props> {
  render() {
    const { size = 36, tile = true, className } = this.props;
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        {tile && <rect width="64" height="64" rx="14" fill="#6B1F3A" />}
        <path d="M18 47 32 16l14 31" fill="none" stroke="#FFF9F6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.4 38q2.4-7.2 4.8 0t4.8 0 4.8 0 4.8 0" fill="none" stroke="#D4AA72" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
}
