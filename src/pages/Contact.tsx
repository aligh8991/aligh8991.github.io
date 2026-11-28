import { Component, FormEvent } from "react";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/content";
import { enterPage } from "../lib/page";

const TOPICS = ["Audio engineering", "Sound design", "Web design", "Translation", "Something else"];
interface State { name: string; topic: string; message: string }

export class Contact extends Component<object, State> {
  state: State = { name: "", topic: TOPICS[0], message: "" };

  componentDidMount() { enterPage(`Contact | ${profile.name}`, "night"); }

  /** No server is needed: the form opens the visitor's own mail app with the brief filled in. */
  private submit = (e: FormEvent) => {
    e.preventDefault();
    const { name, topic, message } = this.state;
    const subject = encodeURIComponent(`${topic} enquiry${name ? ` from ${name}` : ""}`);
    const body = encodeURIComponent(`${message}\n\n${name}`);
    window.location.href = `${profile.mailHref}?subject=${subject}&body=${body}`;
  };

  render() {
    const c = profile.contact;
    const { name, topic, message } = this.state;
    return (
      <div className="page-enter">
        <section className="page-head">
          <div className="container">
            <p className="eyebrow">Contact · 04</p>
            <h1>Start a <em>conversation.</em></h1>
            <p className="lead">Share a short brief with the scope, timeline and delivery format. Projects are scoped and delivered one engagement at a time.</p>
          </div>
        </section>

        <section className="section section--tight">
          <div className="container contact">
            <Reveal>
              <ul className="contact__list">
                <li><a href={profile.mailHref}><span className="contact__ic"><Icon name="mail" /></span><span><small>Email</small><strong>{c.email}</strong></span></a></li>
                <li><a href={profile.telHref}><span className="contact__ic"><Icon name="phone" /></span><span><small>Phone</small><strong>{c.phone}</strong></span></a></li>
                <li><a href={c.soundcloud} target="_blank" rel="noopener noreferrer"><span className="contact__ic"><Icon name="soundcloud" /></span><span><small>Listen</small><strong>soundcloud.com/aayg-1</strong></span></a></li>
                <li><div><span className="contact__ic"><Icon name="pin" /></span><span><small>Based in</small><strong>{c.location}</strong></span></div></li>
              </ul>
              <p className="contact__lang">Working languages: {profile.languages.join(", ")}.</p>
            </Reveal>

            <Reveal delay={80}>
              <form className="form" onSubmit={this.submit}>
                <label>
                  <span>Your name</span>
                  <input type="text" name="name" autoComplete="name" value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                </label>
                <label>
                  <span>Service</span>
                  <select name="topic" value={topic} onChange={(e) => this.setState({ topic: e.target.value })}>
                    {TOPICS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
                <label>
                  <span>Brief</span>
                  <textarea name="message" rows={5} required value={message} onChange={(e) => this.setState({ message: e.target.value })}
                    placeholder="What are you making, and by when?" />
                </label>
                <button className="btn btn--primary" type="submit"><Icon name="mail" /><span>Write the email</span></button>
                <p className="form__note">This opens your mail app with the message ready to send.</p>
              </form>
            </Reveal>
          </div>
        </section>
      </div>
    );
  }
}
