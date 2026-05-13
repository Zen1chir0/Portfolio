import { type AnchorHTMLAttributes, type ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  return (
    <a className={["button", variant, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </a>
  );
}
