import type { ReactNode } from "react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";
import { Spotlight } from "./ui/spotlight";

const icons: Record<string, ReactNode> = {
  Frontend: (
    <>
      <rect x="2.5" y="4" width="19" height="13.5" rx="2.5" />
      <path d="M8 21h8M12 17.5V21" />
    </>
  ),
  Backend: (
    <>
      <rect x="3" y="3.5" width="18" height="6" rx="2" />
      <rect x="3" y="14.5" width="18" height="6" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01" />
    </>
  ),
  Data: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  Architecture: (
    <>
      <rect x="9" y="2.5" width="6" height="5" rx="1.5" />
      <rect x="2" y="16.5" width="6" height="5" rx="1.5" />
      <rect x="16" y="16.5" width="6" height="5" rx="1.5" />
      <path d="M12 7.5v4M5 16.5v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
    </>
  ),
  "Cloud & DevOps": (
    <>
      <path d="M6.5 18.5A4 4 0 0 1 6.9 10.6a5.5 5.5 0 0 1 10.5 1.2 3.6 3.6 0 0 1-.6 7.1z" />
      <path d="M12 12v5M9.7 14.3 12 12l2.3 2.3" />
    </>
  ),
  "Security & Quality": (
    <>
      <path d="M12 2.8 20 6v6c0 4.6-3.2 8.2-8 9.2-4.8-1-8-4.6-8-9.2V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Toolkit"
          title={
            <>
              The whole stack, <span className="text-gradient">end to end.</span>
            </>
          }
          lead="Not a list of everything I have touched — these are the tools I have shipped production systems with, and would happily be handed a pager for."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <Spotlight className="ring-gradient group h-full rounded-[1.5rem] card-surface transition-transform duration-500 hover:-translate-y-1.5">
                <div className="flex h-full flex-col p-7">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-surface text-accent transition-all duration-400 group-hover:border-accent/40 group-hover:text-accent-2">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {icons[group.title]}
                    </svg>
                  </span>

                  <h3 className="mt-5 font-display text-lg font-semibold">{group.title}</h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted">{group.note}</p>

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-line bg-bg-elev px-2.5 py-1.5 font-mono text-[0.72rem] text-muted transition-colors duration-300 hover:border-accent/40 hover:text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
