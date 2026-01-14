"use client";

import { cn } from "@/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "gray" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export function Section({
  className,
  background = "white",
  size = "md",
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-brand-primary text-white",
    secondary: "bg-brand-secondary text-white",
  };

  const sizes = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };

  return (
    <section
      className={cn(backgrounds[background], sizes[size], className)}
      {...props}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
