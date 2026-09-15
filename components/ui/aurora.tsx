/**
 * Ambient background: three slow-drifting colour fields, a faint engineering
 * grid and a grain pass on top so the gradients do not band on wide screens.
 * Purely decorative — fixed, non-interactive, hidden from assistive tech.
 */
export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-bg" />

      <div
        className="absolute -left-[18%] -top-[22%] h-[65vmax] w-[65vmax] rounded-full blur-[70px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--glow-1), transparent 62%)",
        }}
      />
      <div
        className="absolute -right-[16%] top-[4%] h-[60vmax] w-[60vmax] rounded-full blur-[75px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--glow-2), transparent 62%)",
          animationDelay: "-9s",
        }}
      />
      <div
        className="absolute bottom-[-25%] left-[22%] h-[55vmax] w-[55vmax] rounded-full blur-[80px] animate-aurora"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--glow-3), transparent 64%)",
          animationDelay: "-17s",
        }}
      />

      <div
        className="absolute inset-0 grid-overlay"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 60% at 50% 30%, #000 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 60% at 50% 30%, #000 20%, transparent 78%)",
        }}
      />
    </div>
  );
}
