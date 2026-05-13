import { metrics, profile, signals } from "../../data/portfolio";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  return (
    <section className="hero section-grid">
      <Reveal className="hero-copy">
        <p className="eyebrow">{profile.eyebrow}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-lede">{profile.summary}</p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <Button href="#projects">View projects</Button>
          <Button href={profile.cv} variant="secondary" download="Kenneth-Flororita-CV.pdf">
            Download CV
          </Button>
        </div>
      </Reveal>

      <Reveal as="aside" className="control-panel" aria-label="Career impact highlights">
        <div className="panel-header">
          <span className="status-dot" />
          <span>Automation console</span>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
        <div className="signal-list">
          {signals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
