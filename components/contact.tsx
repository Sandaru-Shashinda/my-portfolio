import { profile } from "@/lib/data";
import { CopyField } from "./ui/copy-field";
import { Reveal } from "./ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="ring-gradient relative overflow-hidden rounded-[2rem] card-surface px-6 py-16 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/2 left-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-70 blur-[120px]"
            style={{
              background: "radial-gradient(circle, var(--glow-2), transparent 68%)",
            }}
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full rounded-full bg-accent animate-pulse-ring" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                Available
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                Have a system that needs <span className="text-gradient">building properly?</span>
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
                I am open to senior and lead engineering roles, and to consulting on architecture
                for teams whose data has outgrown their first design. Happy to talk either way.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={`mailto:${profile.email}?subject=Let%27s%20work%20together`}
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-fg px-7 py-4 text-[0.95rem] font-semibold text-bg transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              >
                Start a conversation
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="relative mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={280} className="h-full">
              <CopyField
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                icon={
                  <svg viewBox="0 0 24 24" className="size-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
                    <path d="m3 7 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 7" />
                  </svg>
                }
              />
            </Reveal>

            <Reveal delay={340} className="h-full">
              <CopyField
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phoneHref}`}
                icon={
                  <svg viewBox="0 0 24 24" className="size-[1.1rem]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.5 21a13.4 13.4 0 0 1-12.5-12.5 2.5 2.5 0 0 1 2.5-2.7h2a1.6 1.6 0 0 1 1.6 1.4 9 9 0 0 0 .6 2.3 1.6 1.6 0 0 1-.4 1.7l-.8.8a12 12 0 0 0 4.5 4.5l.8-.8a1.6 1.6 0 0 1 1.7-.4 9 9 0 0 0 2.3.6 1.6 1.6 0 0 1 1.4 1.6v2a2.5 2.5 0 0 1-2.7 2.5z" />
                  </svg>
                }
              />
            </Reveal>

            <Reveal delay={400} className="h-full">
              <CopyField
                label="LinkedIn"
                value={profile.linkedinLabel}
                copyValue={profile.linkedin}
                href={profile.linkedin}
                icon={
                  <svg viewBox="0 0 24 24" className="size-[1.1rem]" fill="currentColor">
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9.5h4v11H3zM10 9.5h3.8v1.5a4.2 4.2 0 0 1 3.7-1.9c3 0 4.5 1.9 4.5 5.3v6.1h-4v-5.5c0-1.6-.6-2.6-2-2.6s-2.2 1-2.2 2.6v5.5h-3.8z" />
                  </svg>
                }
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
