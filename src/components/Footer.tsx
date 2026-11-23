import { Component } from "react";
import { profile } from "../data/content";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer__inner">
          <p>{new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p><a href={profile.mailHref}>{profile.contact.email}</a></p>
        </div>
      </footer>
    );
  }
}
