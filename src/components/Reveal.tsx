import { Component, ReactNode, createRef } from "react";

interface Props { children: ReactNode; delay?: number; className?: string }

/** Fades content up once it enters the viewport. Content stays visible if motion is reduced. */
export class Reveal extends Component<Props> {
  private ref = createRef<HTMLDivElement>();
  private io?: IntersectionObserver;

  componentDidMount() {
    const el = this.ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    this.io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { el.classList.add("is-in"); this.io?.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    this.io.observe(el);
  }
  componentWillUnmount() { this.io?.disconnect(); }

  render() {
    const { children, delay = 0, className = "" } = this.props;
    return (
      <div ref={this.ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
        {children}
      </div>
    );
  }
}
