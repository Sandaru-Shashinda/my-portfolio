"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { ThemeToggle } from "./ui/theme-toggle";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: the topmost section still intersecting the upper band of the
  // viewport wins, which keeps short sections from stealing the highlight.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-bg-elev focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2.5" : "py-4 sm:py-6"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div
            className={`flex items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${
              scrolled ? "glass shadow-[0_8px_32px_-16px_rgba(0,0,0,0.5)]" : "border border-transparent"
            }`}
          >
            <a
              href="#top"
              className="group flex items-center gap-2.5 pl-1.5 text-sm font-semibold tracking-tight"
            >
              <span className="relative flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-display text-[0.8rem] font-bold text-[var(--accent-contrast)] transition-transform duration-300 group-hover:scale-110">
                SS
              </span>
              <span className="hidden font-display sm:inline">{profile.name}</span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-1.5 text-[0.825rem] font-medium transition-colors duration-300 ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {isActive ? (
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-surface ring-1 ring-line"
                      />
                    ) : null}
                    <span className="relative">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              <a
                href="#contact"
                className="hidden rounded-full bg-fg px-4 py-2 text-[0.8rem] font-semibold text-bg transition-transform duration-300 hover:scale-[1.04] active:scale-95 sm:inline-block"
              >
                Get in touch
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex size-9 items-center justify-center rounded-full border border-line text-fg lg:hidden"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                      open ? "top-[5px] rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[5px] block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                      open ? "top-[5px] -rotate-45" : "top-[10px]"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-bg-sunken/80 backdrop-blur-sm transition-opacity duration-400 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav
          className={`absolute inset-x-4 top-24 rounded-3xl glass p-3 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.6)] transition-all duration-400 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          aria-label="Sections"
        >
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-fg transition-colors hover:bg-surface-hover"
            >
              {item.label}
              <span className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-2 block rounded-2xl bg-fg px-4 py-3.5 text-center text-base font-semibold text-bg"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </>
  );
}
