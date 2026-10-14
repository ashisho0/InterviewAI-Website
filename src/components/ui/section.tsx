import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  id?: string;
  labelledBy?: string;
  tone?: "default" | "surface" | "sand";
  className?: string;
  children: React.ReactNode;
}

const tones = {
  default: "bg-bg",
  surface: "bg-surface",
  sand: "bg-sand",
};

export function Section({ id, labelledBy, tone = "default", className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-16 md:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}
