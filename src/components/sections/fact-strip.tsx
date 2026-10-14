import { facts } from "@/content/home";
import { siteCopy } from "@/content/site";
import { Container } from "@/components/ui/container";
import { factIcons } from "@/components/ui/icons";

export function FactStrip() {
  return (
    <section aria-label="InterviewAI at a glance" className="border-y border-border bg-surface">
      <Container className="py-8">
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((fact) => {
            const Icon = factIcons[fact.icon];
            return (
              <li key={fact.label} className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xl font-bold tabular-nums text-fg">{fact.value}</span>
                  <span className="text-sm text-muted-fg">{fact.label}</span>
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-center text-xs text-muted-fg">{siteCopy.disclaimer.split(". Visa")[0]}.</p>
      </Container>
    </section>
  );
}
