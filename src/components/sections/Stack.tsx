import {
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiN8N,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbApi, TbLockAccess, TbTestPipe } from "react-icons/tb";
import { stackGroups } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";

const stackIcons = {
  "GitHub Actions": SiGithubactions,
  "JavaScript": SiJavascript,
  "MongoDB": SiMongodb,
  "Node.js": FaNodeJs,
  "OAuth 2.0": TbLockAccess,
  "OpenAI": SiOpenai,
  "Playwright": TbTestPipe,
  "PostgreSQL": SiPostgresql,
  "Python": SiPython,
  "REST APIs": TbApi,
  "Supabase": SiSupabase,
  "Express": SiExpress,
  "Linux": SiLinux,
  "PHP": SiPhp,
  "React": SiReact,
  "n8n": SiN8N,
};

export function Stack() {
  return (
    <section className="section stack-section" id="stack">
      <Reveal className="section-heading">
        <p className="eyebrow">Core stack</p>
        <h2>Tools I use to make automations durable.</h2>
      </Reveal>
      <Reveal className="stack-grid">
        {stackGroups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.tools}</p>
            <div className="stack-icon-row" aria-label={`${group.title} tools`}>
              {group.icons.map((icon) => {
                const Icon = stackIcons[icon as keyof typeof stackIcons];

                return (
                  <span className="stack-icon" key={icon} title={icon} aria-label={icon}>
                    <Icon aria-hidden="true" />
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
