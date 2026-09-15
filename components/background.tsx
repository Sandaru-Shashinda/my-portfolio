import { achievements, certifications, education } from "@/lib/data";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Background() {
  return (
    <section id="background" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Background"
          title={
            <>
              Physics, maths, and a habit of{" "}
              <span className="text-gradient">competing at things.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Education */}
          <div className="space-y-6">
            {education.map((item, i) => (
              <Reveal key={item.institution} delay={i * 90}>
                <article className="ring-gradient relative rounded-[1.5rem] card-surface p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-semibold">{item.qualification}</h3>
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.95rem] font-medium text-accent-2">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{item.field}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={180}>
              <article className="rounded-[1.5rem] border border-line bg-surface p-7">
                <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-faint">
                  Qualifications
                </h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-muted">
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="mt-[0.1rem] size-4 shrink-0 text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="9" r="5.5" />
                        <path d="m8.2 13.4-1.2 7L12 18l5 2.4-1.2-7" />
                      </svg>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          {/* Achievements */}
          <Reveal delay={140}>
            <div className="h-full rounded-[1.5rem] card-surface p-7">
              <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-faint">
                Outside the terminal
              </h3>

              <ul className="mt-6 space-y-6">
                {achievements.map((item, i) => (
                  <li key={item.title} className="group flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-[0.7rem] font-semibold text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-[0.975rem] font-semibold leading-snug">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[0.85rem] leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-line pt-6 text-[0.85rem] leading-relaxed text-muted">
                Two gold medals in national astrophysics, a decade of competitive cricket and
                badminton, and a faculty committee to run — the same appetite for a hard problem
                that shows up in the work.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
