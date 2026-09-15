"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Contact row: the value is a real link, with a separate copy button so the
 * visitor can grab the address without leaving the page.
 */
export function CopyField({
  label,
  value,
  href,
  icon,
  copyValue,
}: {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  /** What lands on the clipboard, when the displayed value is abbreviated. */
  copyValue?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (insecure context / denied permission) — the link
      // beside this button still works, so there is nothing to recover from.
    }
  };

  return (
    <div className="ring-gradient group relative h-full rounded-2xl card-surface p-5 text-left transition-colors duration-300 hover:bg-surface-hover">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface text-accent transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>

        <button
          type="button"
          onClick={copy}
          aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
          className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-lg border border-line text-faint transition-all duration-300 hover:border-accent hover:text-accent active:scale-90"
        >
          {copied ? (
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m20 6-11 11-5-5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="12" height="12" rx="2.5" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>

      <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-faint">
        {label}
      </p>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
        className="mt-1 block break-words text-[0.9rem] font-medium leading-snug text-fg underline-offset-4 transition-colors hover:text-accent hover:underline"
      >
        {value}
      </a>

      <span
        aria-live="polite"
        className={`mt-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent transition-opacity duration-300 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied
      </span>
    </div>
  );
}
