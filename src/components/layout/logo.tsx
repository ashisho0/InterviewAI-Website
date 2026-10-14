import Link from "next/link";
import { cn } from "@/lib/utils";

/** Arch / gateway mark recreated from the InterviewAI logo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8", className)}>
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <g className="fill-on-primary">
        <circle cx="16" cy="6.2" r="1.1" />
        <path d="M16 7.6 24.5 12H7.5Z" />
        <rect x="7" y="12.4" width="18" height="1.4" rx=".4" />
        <path d="M8.5 14.4h15V25h-2.8v-5.2a2.9 2.9 0 0 0-5.7 0V25h-.1v-5.2a2.9 2.9 0 0 0-5.7 0V25H8.5Z" opacity=".95" />
        <rect x="6" y="25.4" width="20" height="1.2" rx=".6" />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="InterviewAI home" className={cn("inline-flex min-h-11 items-center gap-2.5", className)}>
      <LogoMark />
      <span aria-hidden="true" className="text-lg font-bold tracking-tight text-fg">
        Interview<span className="text-primary">AI</span>
      </span>
    </Link>
  );
}
