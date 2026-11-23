import { Component } from "react";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { profile } from "../data/content";

export class Home extends Component {
  componentDidMount() { document.title = `${profile.name} | ${profile.headline}`; }

  render() {
    return (
      <>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="hero__role">{profile.headline}</p>
              <h1 id="hero-title">{profile.name}</h1>
              <div className="hero__body">
                {profile.summary.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              </div>
              <div className="btn-row">
                <Button variant="primary" icon="mail" href={profile.mailHref}>Email me</Button>
                <Button variant="secondary" icon="phone" href={profile.telHref}>Call me</Button>
                <Button variant="ghost" icon="grid" to="/portfolio">View portfolio</Button>
              </div>
            </div>

            <aside className="contact-card" aria-labelledby="contact-title">
              <h2 id="contact-title">Contact</h2>
              <a className="contact-line" href={profile.mailHref}>
                <span className="icon-wrap"><Icon name="mail" /></span>
                <span><small>Email</small><strong>{profile.contact.email}</strong></span>
              </a>
              <a className="contact-line" href={profile.telHref}>
                <span className="icon-wrap"><Icon name="phone" /></span>
                <span><small>Phone</small><strong>{profile.contact.phone}</strong></span>
              </a>
            </aside>
          </div>
        </section>

        <section className="section" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-head">
              <h2 id="skills-title">Core skills</h2>
              <p className="lead">Three areas of focus, each backed by formal training or hands on delivery.</p>
            </div>
            <div className="grid grid--3">
              {profile.skills.map((s) => (
                <article className="card" key={s.title}>
                  <span className="card__icon"><Icon name={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p className="card__level">{s.level}</p>
                  <p>{s.summary}</p>
                  <ul className="chips">{s.items.map((i) => <li className="chip" key={i}>{i}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint" aria-labelledby="cred-title">
          <div className="container">
            <div className="section-head"><h2 id="cred-title">Certifications</h2></div>
            <ul className="grid grid--3">
              {profile.credentials.map((c) => (
                <li className="cred" key={c.name}>
                  <span className="card__icon"><Icon name="award" /></span>
                  <div><strong>{c.name}</strong><span>{c.issuer}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
