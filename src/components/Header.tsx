import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { profile } from "../data/content";

interface State { open: boolean }

export const NAV_LINKS = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/brand", label: "Brand" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

/** Mobile first header: full screen menu below 900px, inline navigation above. */
export class Header extends Component<object, State> {
  state: State = { open: false };

  private toggle = () => this.setState((s) => ({ open: !s.open }));
  private close = () => this.setState({ open: false });
  private onKey = (e: KeyboardEvent) => { if (e.key === "Escape") this.close(); };

  componentDidMount() { document.addEventListener("keydown", this.onKey); }
  componentWillUnmount() { document.removeEventListener("keydown", this.onKey); document.documentElement.classList.remove("menu-open"); }
  componentDidUpdate() { document.documentElement.classList.toggle("menu-open", this.state.open); }

  render() {
    const { open } = this.state;
    return (
      <header className={`header ${open ? "is-open" : ""}`}>
        <div className="container header__bar">
          <Link className="brand" to="/" onClick={this.close} aria-label={`${profile.name}, home`}>
            <Logo size={34} />
            <span className="brand__name">{profile.name}</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "active" : "")}>{l.label}</NavLink>
            ))}
          </nav>

          <button className="menu-btn" type="button" onClick={this.toggle}
            aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>

        <div className="menu" id="menu" aria-hidden={!open}>
          <nav className="menu__links" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <NavLink key={l.to} to={l.to} onClick={this.close} tabIndex={open ? 0 : -1}
                className={({ isActive }) => `menu__link ${isActive ? "active" : ""}`}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <span>{l.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="menu__foot">
            <a href={profile.mailHref} tabIndex={open ? 0 : -1}>{profile.contact.email}</a>
            <a href={profile.telHref} tabIndex={open ? 0 : -1}>{profile.contact.phone}</a>
            <a href={profile.contact.soundcloud} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>SoundCloud</a>
          </div>
        </div>
      </header>
    );
  }
}
