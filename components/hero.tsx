import { profile, stats } from "@/lib/data";
import { Counter } from "./ui/counter";
import { Reveal } from "./ui/reveal";
import { RoleRotator } from "./ui/role-rotator";

const marquee = [
  "TypeScript",
  "Next.js",
  "React",
  "Angular",
  "Node.js",
  "Nest.js",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "RabbitMQ",
  "Microservices",
  "Docker",
  "AWS",
  "WebSockets",
  "GraphQL",
  "Jest",
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center pt-32 pb-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.78rem] font-medium text-muted backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-accent animate-pulse-ring" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Open to senior & lead roles
            <span className="text-faint" aria-hidden>
              ·
            </span>
            {profile.location}
          </span>
        </Reveal>

        <h1 className="mt-7 font-display font-semibold leading-[0.88] tracking-[-0.045em]">
          <Reveal delay={80}>
            <span className="block text-[clamp(2.9rem,11.5vw,8.75rem)]">{profile.firstName}</span>
          </Reveal>
          <Reveal delay={160}>
            <span className="block text-[clamp(2.9rem,11.5vw,8.75rem)] text-gradient">
              {profile.lastName}
            </span>
          </Reveal>
        </h1>

        <Reveal delay={240}>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-sm text-muted sm:text-base">
            <span className="text-faint" aria-hidden>
              &gt;
            </span>
            <span className="sr-only">Currently:</span>
            <RoleRotator roles={profile.roles} />
          </p>
        </Reveal>

        <Reveal delay={310}>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
            {profile.shortSummary}
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3.5 text-sm font-semibold text-bg transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent via-accent-2 to-accent-3 transition-transform duration-500 group-hover:translate-x-0"
              />
              <span className="relative">See what I have built</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="relative size-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
                <path d="m3 7 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 7" />
              </svg>
              Email me
            </a>
          </div>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-line pt-9 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={450 + i * 80}>
              <div>
                <dd className="num text-3xl font-bold sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-1.5 text-[0.8rem] font-medium leading-snug text-muted">
                  {stat.label}
                </dt>
                <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint">
                  {stat.hint}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>

      {/* Full-bleed stack marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-line py-4 edge-fade">
        <div className="flex w-max animate-marquee gap-10 pr-10" aria-hidden>
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-10 font-mono text-[0.78rem] uppercase tracking-[0.2em] text-faint"
            >
              {item}
              <span className="size-1 rounded-full bg-accent/50" />
            </span>
          ))}
        </div>
        <p className="sr-only">
          Core stack: {marquee.join(", ")}.
        </p>
      </div>
    </section>
  );
}
