import { navItems, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#top" className="group inline-flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-display text-[0.8rem] font-bold text-[var(--accent-contrast)] transition-transform duration-300 group-hover:scale-110">
                SS
              </span>
              <span className="font-display text-sm font-semibold">{profile.name}</span>
            </a>
            <p className="mt-3 text-[0.82rem] text-faint">
              {profile.title} · {profile.location}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.82rem] text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
            Built with Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
