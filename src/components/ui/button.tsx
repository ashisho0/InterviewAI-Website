import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "accent" | "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-[background-color,color,box-shadow,border-color] duration-150 active:translate-y-px cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-on-accent shadow-card hover:bg-accent-hover hover:shadow-lift",
  primary: "bg-primary text-on-primary hover:opacity-90",
  outline: "border border-input-border bg-surface text-fg hover:border-primary hover:text-primary",
  ghost: "text-fg hover:bg-primary-soft",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-13 px-6 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

/** Internal links use next/link; absolute URLs use a plain anchor. */
export function ButtonLink({ href, variant, size, className, children }: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
