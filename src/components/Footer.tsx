import { Component } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NAV_LINKS } from "./Header";
import { profile } from "../data/content";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__id">
            <Logo size={44} />
            <p>{profile.name}<br /><span>Alto Studio · {profile.contact.location}</span></p>
          </div>
          <nav className="footer__nav" aria-label="Footer">
            {NAV_LINKS.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
            <a href={profile.contact.soundcloud} target="_blank" rel="noopener noreferrer">SoundCloud</a>
          </nav>
          <p className="footer__legal">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}
