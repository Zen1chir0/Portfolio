import { profile } from "../../data/portfolio";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <Reveal as="section" className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Available for automation work</p>
        <h2>Need AI workflows that survive real operations?</h2>
        <p>
          I'm focused on production logic: monitoring, escalation, CRM sync, agent behavior, and the unglamorous
          details that keep systems trusted after launch.
        </p>
        <div className="contact-actions">
          <Button href={`mailto:${profile.email}`}>Start a conversation</Button>
          <Button href={profile.cv} download variant="secondary">
            Download CV
          </Button>
          <Button href={profile.github} target="_blank" rel="noreferrer" variant="secondary">
            GitHub
          </Button>
          <Button href={profile.linkedin} target="_blank" rel="noreferrer" variant="secondary">
            LinkedIn
          </Button>
        </div>
      </div>

      <div className="contact-portrait" aria-label={`${profile.name} portrait`}>
        <img
          src={profile.image}
          alt={profile.name}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          onLoad={(event) => {
            event.currentTarget.parentElement?.classList.add("has-image");
          }}
        />
        <span>{profile.initials}</span>
      </div>
    </Reveal>
  );
}
