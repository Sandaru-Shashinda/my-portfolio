"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 58;
const DELETE_MS = 28;
const HOLD_MS = 2100;

/**
 * Terminal-style typewriter cycling through the given roles.
 *
 * The first role is rendered in full on the server, so there is no empty
 * flash and reduced-motion visitors simply keep that static text. The loop
 * below owns its own cursor as plain locals and only pushes to React state
 * from the timer callback.
 */
export function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [text, setText] = useState(roles[0] ?? "");

  useEffect(() => {
    if (roles.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout>;
    let roleIndex = 0;
    let chars = roles[0].length;
    let deleting = true;

    const tick = () => {
      let delay: number;

      if (deleting) {
        chars -= 1;
        if (chars <= 0) {
          chars = 0;
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          delay = TYPE_MS;
        } else {
          delay = DELETE_MS;
        }
      } else {
        chars += 1;
        if (chars >= roles[roleIndex].length) {
          chars = roles[roleIndex].length;
          deleting = true;
          delay = HOLD_MS;
        } else {
          delay = TYPE_MS;
        }
      }

      setText(roles[roleIndex].slice(0, chars));
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient font-medium">{text}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-accent animate-blink"
      />
    </span>
  );
}
