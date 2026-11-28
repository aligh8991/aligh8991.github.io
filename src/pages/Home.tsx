import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { SoundWave } from "../components/SoundWave";
import { NAV_LINKS } from "../components/Header";
import { profile } from "../data/content";
import { enterPage } from "../lib/page";

const BLURBS: Record<string, string> = {
  "/portfolio": "Music and sound design, playable here",
  "/brand": "Logo, colour, type and voice",
  "/cv": "Experience, skills and certification",
  "/contact": "Start a project conversation",
};

/** Minimal landing page: one intro, one living artwork, one index. */
export class Home extends Component {
  componentDidMount() { enterPage(`${profile.name} | ${profile.headline}`, "night"); }

  render() {
    return (
      <div className="page-enter">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero__inner">
            <p className="eyebrow hero__eyebrow">{profile.roles.slice(0, 2).join(" · ")}</p>
            <h1 id="hero-title" className="hero__title">
              Sound,<br /><em>shaped</em><br />with care.
            </h1>
            <SoundWave />
            <p className="hero__intro">
              <strong>{profile.name}.</strong> {profile.intro}
            </p>
            <div className="btn-row">
              <Button variant="primary" icon="play" to="/portfolio">Listen to the work</Button>
              <Button variant="ghost" icon="mail" to="/contact">Get in touch</Button>
            </div>
            <span className="hero__scroll" aria-hidden="true">Index</span>
          </div>
        </section>

        <section className="index" aria-label="Site index">
          <div className="container">
            <ul className="index__list">
              {NAV_LINKS.map((l, i) => (
                <li key={l.to}>
                  <Reveal delay={i * 60}>
                    <Link className="index__row" to={l.to}>
                      <span className="index__num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="index__text">
                        <strong>{l.label}</strong>
                        <small>{BLURBS[l.to]}</small>
                      </span>
                      <Icon name="arrow" />
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
