import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={70}>
        <h2 className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-[1.0625rem]">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
