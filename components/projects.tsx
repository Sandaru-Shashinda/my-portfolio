import { projects, type Project } from "@/lib/data";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";
import { Spotlight } from "./ui/spotlight";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Platforms built for the{" "}
              <span className="text-gradient">unglamorous parts</span> — scale, money, identity.
            </>
          }
          lead="Enterprise systems where correctness and response time are the product. Client work, so the screenshots stay behind NDAs — what follows is the engineering."
        />

        <div className="mt-16">
          <FeaturedCard project={featured} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={i * 110}>
              <ProjectCard project={project} index={i + 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <Spotlight className="ring-gradient rounded-[1.75rem] card-surface">
        <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 font-mono text-[0.63rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent-contrast)]">
                Flagship
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-faint">
                {project.kind}
              </span>
            </div>

            <h3 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-[2.5rem]">
              {project.name}
            </h3>

            <p className="mt-5 max-w-xl text-[1.0125rem] leading-relaxed text-muted">
              {project.blurb}
            </p>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {project.highlights.map((point) => (
                <li key={point} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-muted">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="mt-[0.2rem] size-4 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m20 6-11 11-5-5" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <p className="font-display text-[3.25rem] font-semibold leading-none text-gradient">
                {project.metric.value}
              </p>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">
                {project.metric.label}
              </p>
            </div>

            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-faint">
                Stack
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-line bg-bg-elev px-2.5 py-1.5 font-mono text-[0.72rem] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Spotlight>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Spotlight className="ring-gradient group h-full rounded-[1.5rem] card-surface transition-transform duration-500 hover:-translate-y-1.5">
      <div className="flex h-full flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-faint">
            {project.kind}
          </span>
          <span className="font-display text-sm font-semibold text-faint transition-colors duration-300 group-hover:text-accent">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{project.name}</h3>

        <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{project.blurb}</p>

        <div className="mt-6 rounded-xl border border-line bg-surface px-4 py-3">
          <p className="font-display text-lg font-semibold text-gradient">{project.metric.value}</p>
          <p className="mt-0.5 text-[0.76rem] leading-snug text-faint">{project.metric.label}</p>
        </div>

        <ul className="mt-6 space-y-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-[0.85rem] leading-relaxed text-muted">
              <span aria-hidden className="mt-[0.5rem] size-1 shrink-0 rounded-full bg-accent/70" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-7">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line px-2 py-1 font-mono text-[0.68rem] text-faint"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Spotlight>
  );
}
