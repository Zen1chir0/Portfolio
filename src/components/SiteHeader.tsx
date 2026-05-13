import { type MouseEvent } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { navItems, profile } from "../data/portfolio";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

type SiteHeaderProps = {
  theme: "light" | "dark";
  onThemeToggle: (button: HTMLButtonElement) => void;
};

export function SiteHeader({ theme, onThemeToggle }: SiteHeaderProps) {
  const handleThemeClick = (event: MouseEvent<HTMLButtonElement>) => {
    onThemeToggle(event.currentTarget);
  };

  return (
    <Reveal as="header" className="topbar">
      <a className="brand" href="#home" aria-label={`${profile.name} home`}>
        <span className="brand-mark">{profile.initials}</span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="topbar-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={theme === "dark"}
          onClick={handleThemeClick}
        >
          {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
        <Button className="nav-cta" href="#contact">
          Let's build
        </Button>
      </div>
    </Reveal>
  );
}
