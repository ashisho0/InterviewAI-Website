/** Decorative: an empty question card with a question mark. */
export function NotFoundIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 180" aria-hidden="true" className={className}>
      <rect x="30" y="24" width="180" height="132" rx="16" className="fill-surface stroke-border" strokeWidth="2" />
      <rect x="52" y="48" width="96" height="10" rx="5" className="fill-primary-soft" />
      <rect x="52" y="68" width="136" height="8" rx="4" className="fill-border" />
      <rect x="52" y="84" width="120" height="8" rx="4" className="fill-border" />
      <rect x="52" y="100" width="80" height="8" rx="4" className="fill-border" />
      <circle cx="176" cy="132" r="30" className="fill-accent" />
      <text x="176" y="144" textAnchor="middle" fontSize="36" fontWeight="700" className="fill-on-accent">
        ?
      </text>
    </svg>
  );
}
