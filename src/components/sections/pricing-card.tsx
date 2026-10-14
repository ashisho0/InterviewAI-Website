import { Check } from "lucide-react";
import { pricingPage } from "@/content/pages";
import { TryNowButton } from "@/components/ui/try-now-button";

export function PricingCard({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const { plan } = pricingPage;
  const Heading = headingLevel;
  return (
    <div className="mx-auto max-w-md rounded-3xl border-2 border-primary bg-surface p-8 shadow-lift">
      <div className="flex items-center justify-between">
        <Heading className="text-xl font-bold text-fg">{plan.name}</Heading>
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-on-accent">{plan.badge}</span>
      </div>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-bold tabular-nums text-fg">{plan.price}</span>
        <span className="text-muted-fg">{plan.period}</span>
      </p>
      <p className="mt-3 text-muted-fg">{plan.description}</p>
      <ul className="mt-6 space-y-3">
        {plan.included.map((item) => (
          <li key={item} className="flex gap-3 text-fg">
            <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-risk-low" />
            {item}
          </li>
        ))}
      </ul>
      <TryNowButton placement="pricing" size="lg" className="mt-8 w-full" />
    </div>
  );
}
