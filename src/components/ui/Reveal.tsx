import { type ElementType, type HTMLAttributes, type ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

type RevealProps<T extends HTMLElement> = HTMLAttributes<T> & {
  as?: ElementType;
  children: ReactNode;
};

export function Reveal<T extends HTMLElement = HTMLDivElement>({
  as: Component = "div",
  children,
  className = "",
  ...props
}: RevealProps<T>) {
  const [ref, isVisible] = useReveal<T>();
  const classes = ["reveal", isVisible ? "is-visible" : "", className].filter(Boolean).join(" ");

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  );
}
