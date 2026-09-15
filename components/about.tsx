import { languages, profile, softSkills } from "@/lib/data";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

const layers = [
  { name: "Client", detail: "Next.js · React · Angular", note: "Pixel-accurate, fast" },
  { name: "Gateway", detail: "REST · tRPC · GraphQL · WebSockets", note: "One door in" },
  { name: "Services", detail: "Nest.js · Spring Boot · RabbitMQ", note: "Async, decoupled" },
  { name: "Data", detail: "PostgreSQL · MongoDB · TypeORM", note: "Tuned for 10M rows" },
  { name: "Platform", detail: "AWS · Docker · CI/CD · ELK", note: "Observable in prod" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  I build systems that hold up{" "}
                  <span className="text-gradient">when the data gets heavy.</span>
                </>
              }
            />

            <Reveal delay={200}>
              <p className="mt-8 text-[1.0625rem] leading-[1.75] text-muted">{profile.summary}</p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-5 text-[1.0625rem] leading-[1.75] text-muted">
                Most of my work has been enterprise-grade — telecom BPO, insurance ERP, centralized
                identity — where a slow query or a leaky permission is not a bug report, it is an
                incident. I care about the architecture decisions that stop those from happening,
                and about leaving the engineers around me better equipped than I found them.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10">
                <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-faint">
                  Beyond the code
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.8rem] font-medium text-muted transition-colors duration-300 hover:border-accent/50 hover:text-fg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-faint">
                      {lang.level}
                    </dt>
                    <dd className="mt-1 font-display text-lg font-medium">{lang.name}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Architecture card */}
          <Reveal delay={180} className="lg:pt-8">
            <div className="ring-gradient sticky top-28 rounded-3xl card-surface p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-faint">
                  how I stack things
                </span>
                <span className="flex gap-1.5" aria-hidden>
                  <span className="size-2 rounded-full bg-accent-3/60" />
                  <span className="size-2 rounded-full bg-accent-2/60" />
                  <span className="size-2 rounded-full bg-accent/60" />
                </span>
              </div>

              <ol className="relative mt-6 space-y-6">
                <span
                  aria-hidden
                  className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent"
                />

                {layers.map((layer) => (
                  <li key={layer.name} className="group relative pl-8">
                    <span
                      aria-hidden
                      className="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-accent bg-bg-elev transition-all duration-300 group-hover:scale-125 group-hover:bg-accent"
                    />
                    <p className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-display text-base font-semibold">{layer.name}</span>
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint">
                        {layer.note}
                      </span>
                    </p>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-muted">{layer.detail}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl bg-surface p-5">
                <p className="font-display text-[2rem] font-semibold leading-none text-gradient">
                  &lt; 2s
                </p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                  Every API response on the telecom platform, against schemas holding 5–10 million
                  records.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
