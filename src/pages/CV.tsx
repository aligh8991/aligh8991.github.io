import { Component } from "react";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { experience, profile } from "../data/content";
import { enterPage } from "../lib/page";

/** HTML version of the CV, structured from the same data as the rest of the site. Print friendly. */
export class CV extends Component {
  componentDidMount() { enterPage(`CV | ${profile.name}`, "paper"); }

  render() {
    const c = profile.contact;
    return (
      <div className="page-enter cv">
        <section className="page-head">
          <div className="container">
            <p className="eyebrow">Curriculum vitae · 03</p>
            <h1>{profile.name}</h1>
            <p className="cv__roles">{profile.roles.join(" · ")}</p>
            <p className="cv__roles cv__roles--sub">Founder, Alto Studio · Freelance agency</p>
            <div className="btn-row no-print">
              <Button variant="primary" icon="download" href="./Ali_Ghanbarzadeh_CV.pdf" download>Download PDF</Button>
              <Button variant="ghost" icon="print" onClick={() => window.print()}>Print</Button>
            </div>
          </div>
        </section>

        <div className="container cv__grid">
          <aside className="cv__side">
            <Reveal>
              <ul className="cv__contact">
                <li><Icon name="mail" /><a href={profile.mailHref}>{c.email}</a></li>
                <li><Icon name="phone" /><a href={profile.telHref}>{c.phone}</a></li>
                <li><Icon name="pin" /><span>{c.location}</span></li>
                <li><Icon name="soundcloud" /><a href={c.soundcloud} target="_blank" rel="noopener noreferrer">soundcloud.com/aayg-1</a></li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="cv__h">Languages</h2>
              <p>{profile.languages.join(" · ")}</p>
              <h2 className="cv__h">Interests</h2>
              <p>{profile.interests.join(" · ")}</p>
            </Reveal>

            <Reveal>
              <h2 className="cv__h">Education</h2>
              <p><strong>{profile.education.name}</strong><br />{profile.education.school}<br />
                <span className="mono">{profile.education.period}</span></p>
            </Reveal>
          </aside>

          <div className="cv__main">
            <Reveal>
              <h2 className="cv__h">Professional summary</h2>
              {profile.summary.map((p) => <p key={p.slice(0, 20)} className="cv__summary">{p}</p>)}
            </Reveal>

            <h2 className="cv__h">Professional experience</h2>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.period}>
                  <Reveal>
                    <article className="job">
                      <header>
                        <h3>{e.role}</h3>
                        <span className="job__period mono">{e.period}</span>
                      </header>
                      <p className="job__org"><strong>{e.organisation}</strong> · {e.detail}</p>
                      <ul>{e.highlights.map((h) => <li key={h.slice(0, 24)}>{h}</li>)}</ul>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>

            <Reveal>
              <h2 className="cv__h">Core skills</h2>
              <div className="skills">
                {profile.skills.map((s) => (
                  <section className="skill" key={s.title}>
                    <h3><Icon name={s.icon} />{s.title}</h3>
                    <ul className="chips">{s.foundations.map((f) => <li className="chip" key={f}>{f}</li>)}</ul>
                    {s.certified && <p className="skill__cert"><Icon name="award" /><span>{s.certified}</span></p>}
                  </section>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="cv__h">Certifications</h2>
              <ul className="certs">
                {profile.credentials.map((cr) => (
                  <li key={cr.name}><Icon name="award" /><div><strong>{cr.name}</strong><span>{cr.issuer}</span></div></li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    );
  }
}
