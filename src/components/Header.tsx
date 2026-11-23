import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import { profile } from "../data/content";

interface State { open: boolean }

const LINKS = [
  { to: "/", label: "Profile", end: true },
  { to: "/portfolio", label: "Portfolio", end: false },
];

/** Mobile first header: full screen menu sheet below 960px, inline nav above. */
export class Header extends Component<object, State> {
  state: State = { open: false };

  private toggle = () => this.setState((s) => ({ open: !s.open }));
  private close = () => this.setState({ open: false });
  private onKey = (e: KeyboardEvent) => { if (e.key === "Escape") this.close(); };

  componentDidMount() { document.addEventListener("keydown", this.onKey); }
  componentWillUnmount() { document.removeEventListener("keydown", this.onKey); document.body.style.overflow = ""; }
  componentDidUpdate() { document.body.style.overflow = this.state.open ? "hidden" : ""; }

  render() {
    const { open } = this.state;
    return (
      <header className="header">
        <div className="container header__bar">
          <Link className="brand" to="/" onClick={this.close} aria-label="Ali Ghanbarzadeh, home">
            <span className="brand__mark" aria-hidden="true">{profile.initials}</span>
            <span>{profile.name}</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : "")}>{l.label}</NavLink>
            ))}
          </nav>

          <button className="menu-btn" type="button" onClick={this.toggle}
            aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>

        <div className="sheet" id="mobile-menu" hidden={!open}>
          <nav className="sheet__links" aria-label="Mobile">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} onClick={this.close}
                className={({ isActive }) => `sheet__link ${isActive ? "active" : ""}`}>
                <span>{l.label}</span><Icon name="arrow" />
              </NavLink>
            ))}
          </nav>
          <div className="btn-row">
            <a className="btn btn--primary" href={profile.mailHref}><Icon name="mail" /><span>Email me</span></a>
            <a className="btn btn--secondary" href={profile.telHref}><Icon name="phone" /><span>Call me</span></a>
          </div>
        </div>
      </header>
    );
  }
}
