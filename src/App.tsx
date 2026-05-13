import { type CSSProperties, useEffect, useState } from "react";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Projects } from "./components/sections/Projects";
import { Stack } from "./components/sections/Stack";
import { SiteHeader } from "./components/SiteHeader";

type Theme = "light" | "dark";

const transitionDuration = 1400;
const themeApplyDelay = 420;
const fadeDuration = 420;

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [overlay, setOverlay] = useState({
    active: false,
    fading: false,
    visible: false,
    x: "100%",
    y: "0px",
    radius: "0px",
    mode: "dark" as Theme,
  });

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const initialTheme = storedTheme ?? "light";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const switchTheme = (targetTheme: Theme) => {
    setTheme(targetTheme);
    document.documentElement.dataset.theme = targetTheme;
    window.localStorage.setItem("portfolio-theme", targetTheme);
  };

  const handleThemeToggle = (button: HTMLButtonElement) => {
    const targetTheme = theme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      switchTheme(targetTheme);
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    setOverlay({
      active: false,
      fading: false,
      visible: true,
      x: `${x}px`,
      y: `${y}px`,
      radius: `${Math.ceil(radius)}px`,
      mode: targetTheme,
    });

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setOverlay((current) => ({ ...current, active: true }));
      });
    });

    window.setTimeout(() => {
      switchTheme(targetTheme);
    }, themeApplyDelay);

    window.setTimeout(() => {
      setOverlay((current) => ({ ...current, fading: true }));
    }, transitionDuration);

    window.setTimeout(() => {
      setOverlay((current) => ({ ...current, active: false, fading: false, visible: false }));
    }, transitionDuration + fadeDuration);
  };

  return (
    <>
      <div className="site-shell">
        <SiteHeader theme={theme} onThemeToggle={handleThemeToggle} />
        <main id="home">
          <Hero />
          <Marquee />
          <Experience />
          <Projects />
          <Stack />
          <Education />
          <Contact />
        </main>
      </div>
      <div
        aria-hidden="true"
        className={[
          "theme-reveal-overlay",
          overlay.visible ? "is-visible" : "",
          overlay.active ? "is-active" : "",
          overlay.fading ? "is-fading" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={
          {
            "--reveal-x": overlay.x,
            "--reveal-y": overlay.y,
            "--reveal-radius": overlay.radius,
            "--reveal-tint": overlay.mode === "dark" ? "15, 23, 20" : "247, 244, 238",
            "--reveal-blend": overlay.mode === "dark" ? "multiply" : "screen",
          } as CSSProperties
        }
      />
    </>
  );
}
