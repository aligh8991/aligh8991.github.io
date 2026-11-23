import { Component } from "react";
import { Icon } from "../components/Icon";
import { Button } from "../components/Button";
import { profile, projects } from "../data/content";

type Filter = "All" | "Completed" | "In development";
interface State { filter: Filter }
const FILTERS: Filter[] = ["All", "Completed", "In development"];

export class Portfolio extends Component<object, State> {
  state: State = { filter: "All" };

  componentDidMount() { document.title = `Portfolio | ${profile.name}`; }

  private visible() {
    const { filter } = this.state;
    return filter === "All" ? projects : projects.filter((p) => p.status === filter);
  }

  render() {
    return (
      <>
        <section className="page-head">
          <div className="container">
            <h1>Portfolio</h1>
            <p className="lead">Selected projects across design, publishing, e-commerce and software.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="filters" role="group" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button key={f} type="button" className="filter" aria-pressed={this.state.filter === f}
                  onClick={() => this.setState({ filter: f })}>{f}</button>
              ))}
            </div>

            <div className="grid grid--2">
              {this.visible().map((p) => (
                <article className="card" key={p.title}>
                  <div className="project__top">
                    <span className="project__cat">{p.category}</span>
                    <span className={`badge ${p.isLive ? "badge--done" : ""}`}>{p.status}</span>
                  </div>
                  <h2 className="project__title">{p.title}</h2>
                  <p>{p.summary}</p>
                  <ul className="chips">{p.stack.map((s) => <li className="chip" key={s}>{s}</li>)}</ul>
                  <p className="project__outcome"><Icon name="check" /><span>{p.outcome}</span></p>
                </article>
              ))}
            </div>

            <div className="btn-row page-actions">
              <Button variant="primary" icon="mail" href={profile.mailHref}>Discuss a project</Button>
              <Button variant="ghost" icon="user" to="/">Back to profile</Button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
