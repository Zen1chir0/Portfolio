import { SiGithub } from "react-icons/si";
import { projects } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";

export function Projects() {
  const orderedProjects = [...projects].sort((first, second) => {
    if (first.featured === second.featured) {
      return 0;
    }

    return first.featured ? 1 : -1;
  });

  return (
    <section className="section projects-section" id="projects">
      <Reveal className="section-heading">
        <p className="eyebrow">Selected systems</p>
        <h2>Projects built around reliability, escalation, and action.</h2>
      </Reveal>
      <div className="project-grid">
        {orderedProjects.map((project) => (
          <Reveal
            as="article"
            tabIndex={0}
            className={[
              "project-card",
              project.featured ? "featured" : "",
              project.ndaProtected ? "protected" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            key={project.title}
          >
            {project.featured ? (
              <div className="featured-project-header">
                <div className="featured-project-copy project-content">
                  <div className="project-meta-row">
                    <p className="project-kicker">{project.kicker}</p>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="tag-list">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                {project.repoUrl ? (
                  <a className="repository-button" href={project.repoUrl} target="_blank" rel="noreferrer">
                    <SiGithub aria-hidden="true" />
                    <span>View Repository</span>
                  </a>
                ) : null}
              </div>
            ) : (
              <div className="project-content">
                <div className="project-meta-row">
                  <p className="project-kicker">{project.kicker}</p>
                  {project.ndaProtected ? <span className="nda-pill">Protected by NDA</span> : null}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            )}

            <div
              className={["project-media-slot", project.featured ? "screenshot-showcase" : ""]
                .filter(Boolean)
                .join(" ")}
              aria-label={`${project.title} screenshot placeholder`}
            >
              {project.mediaSrc && project.ndaProtected ? (
                <img className="architecture-image" src={project.mediaSrc} alt={`${project.title} architecture flowchart`} />
              ) : project.mediaSrc ? (
                <div className="screenshot-frame">
                  <img src={project.mediaSrc} alt={`${project.title} screenshot`} />
                </div>
              ) : project.featured && project.flow ? (
                <>
                  <div className="screenshot-fallback">
                    <span>{project.mediaLabel}</span>
                    <small>{project.mediaNote}</small>
                  </div>
                  <div className="flow-preview" aria-label="FlowSentinel reliability pipeline">
                    {project.flow.map((step, index) => (
                      <div className="flow-step" key={step}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{step}</strong>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <span>{project.mediaLabel}</span>
                  <small>{project.mediaNote}</small>
                </>
              )}
            </div>
            {project.mediaCaption ? <p className="media-caption">{project.mediaCaption}</p> : null}

            {project.features ? (
              <div className="project-feature-grid">
                {project.features.map((feature) => (
                  <div className="project-feature-card" key={feature.title}>
                    <strong>{feature.title}</strong>
                    <span>{feature.description}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
