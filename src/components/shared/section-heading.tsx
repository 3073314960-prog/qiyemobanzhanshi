import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "h-px w-8",
              dark ? "bg-accent" : "bg-primary",
            )}
            aria-hidden
          />
          <span
            className={cn(
              "text-sm font-semibold tracking-wider uppercase",
              dark ? "text-signal-400" : "text-primary",
            )}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed",
            dark ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
