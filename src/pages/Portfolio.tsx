import { Component } from "react";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { TrackCard } from "../components/TrackCard";
import { profile, tracks, studioProjects } from "../data/content";
import { enterPage } from "../lib/page";

export class Portfolio extends Component {
  componentDidMount() { enterPage(`Portfolio | ${profile.name}`, "night"); }

  render() {
    return (
      <div className="page-enter">
        <section className="page-head">
          <div className="container">
            <p className="eyebrow">Portfolio · 01</p>
            <h1>Selected <em>sound.</em></h1>
            <p className="lead">Music production and sound design, streamed from SoundCloud. Press play on any release to listen without leaving the site.</p>
          </div>
        </section>

        <section className="section section--tight" aria-label="Releases">
          <div className="container stack">
            {tracks.map((t, i) => (
              <Reveal key={t.url} delay={i * 60}><TrackCard track={t} index={i} /></Reveal>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="services-title">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Disciplines</p>
              <h2 id="services-title">Four service lines, one studio.</h2>
            </Reveal>
            <ul className="services">
              {profile.services.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={i * 50}>
                    <div className="service">
                      <span className="service__icon"><Icon name={s.icon} /></span>
                      <h3>{s.title}</h3>
                      <p>{s.summary}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--rule" aria-labelledby="studio-title">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Alto Studio</p>
              <h2 id="studio-title">Beyond sound.</h2>
              <p className="lead">Design, publishing and software projects delivered by the same studio.</p>
            </Reveal>
            <ul className="rows">
              {studioProjects.map((p, i) => (
                <li key={p.title}>
                  <Reveal delay={i * 50}>
                    <div className="row">
                      <div>
                        <h3>{p.title}</h3>
                        <p>{p.summary}</p>
                      </div>
                      <div className="row__side">
                        <span className="row__cat">{p.category}</span>
                        <span className={`badge ${p.isLive ? "badge--done" : ""}`}>{p.status}</span>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <div className="btn-row page-actions">
              <Button variant="primary" icon="mail" to="/contact">Discuss a project</Button>
              <Button variant="ghost" icon="user" to="/cv">View the CV</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
