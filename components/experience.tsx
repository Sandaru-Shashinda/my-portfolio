import { experience } from "@/lib/data";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";
import { Spotlight } from "./ui/spotlight";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Five years, four teams, one{" "}
              <span className="text-gradient">consistent trajectory.</span>
            </>
          }
          lead="From pixel-perfect UIs as a trainee to leading architecture on platforms that carry millions of rows — each step built on the one before it."
        />

        <ol className="relative mt-16 space-y-5">
          {/*
            The rail, desktop only: below lg the cards run full width and would
            paint over it. Its offset is the period column (11rem) + the grid
            gap (1.5rem) + half the dot, so it threads the dots exactly.
          */}
          <span
            aria-hidden
            className="absolute top-9 bottom-8 hidden w-px bg-gradient-to-b from-accent via-accent-2/50 to-transparent lg:left-[calc(11rem+1.5rem+7px)] lg:block"
          />

          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} as="li" delay={i * 90}>
              <div className="grid gap-x-6 lg:grid-cols-[11rem_auto_1fr]">
                {/* Period rail label (desktop) */}
                <div className="hidden pt-6 text-right lg:block">
                  <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] text-fg">
                    {job.period}
                  </p>
                  <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-faint">
                    {job.duration}
                  </p>
                </div>

                {/* Dot */}
                <div className="relative hidden w-[15px] justify-center pt-[1.85rem] lg:flex">
                  <Dot current={job.current} />
                </div>

                <Spotlight className="ring-gradient rounded-3xl card-surface">
                  <div className="relative pl-12 pr-6 py-6 sm:py-7 lg:pl-7 lg:pr-8">
                    {/* Dot (mobile, inside the card gutter) */}
                    <span className="absolute left-0 top-[1.85rem] flex w-[15px] justify-center lg:hidden">
                      <Dot current={job.current} />
                    </span>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="font-display text-lg font-semibold sm:text-xl">{job.role}</h3>
                      {job.current ? (
                        <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.63rem] uppercase tracking-[0.14em] text-accent">
                          Current
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-1 text-[0.95rem] font-medium text-accent-2">{job.company}</p>

                    <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-faint lg:hidden">
                      {job.period} · {job.duration}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {job.highlights.map((point) => (
                        <li key={point} className="flex gap-3 text-[0.9rem] leading-relaxed text-muted">
                          <span
                            aria-hidden
                            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-accent/70"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Spotlight>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Dot({ current }: { current?: boolean }) {
  return (
    <span className="relative flex size-[15px] items-center justify-center">
      {current ? (
        <span aria-hidden className="absolute size-[15px] rounded-full bg-accent animate-pulse-ring" />
      ) : null}
      <span
        aria-hidden
        className={`relative size-[13px] rounded-full border-2 ${
          current ? "border-accent bg-accent" : "border-line-strong bg-bg-elev"
        }`}
      />
    </span>
  );
}
