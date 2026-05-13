import { experiences } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Experience() {
  return (
    <section className="section" id="work">
      <Reveal className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Where automation meets business pressure.</h2>
      </Reveal>
      <div className="timeline">
        {experiences.map((experience) => (
          <Reveal as="article" className="timeline-item" key={`${experience.company}-${experience.period}`}>
            <div className="timeline-date">{experience.period}</div>
            <div className="timeline-card">
              <div className="role-row">
                <h3>{experience.role}</h3>
                <span>{experience.company}</span>
              </div>
              <p>{experience.summary}</p>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
