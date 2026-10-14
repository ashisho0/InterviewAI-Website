import { JsonLd } from "@/components/seo/json-ld";
import { Faq } from "@/components/sections/faq";
import { FactStrip } from "@/components/sections/fact-strip";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { InterviewAiSpotlight } from "@/components/sections/interview-ai-spotlight";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { UseCases } from "@/components/sections/use-cases";
import { homeFaq } from "@/content/faq";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactStrip />
      <ProblemSolution />
      <FeatureGrid />
      <HowItWorks />
      <InterviewAiSpotlight />
      <ProductShowcase />
      <UseCases />
      <Testimonials />
      <PricingSection />
      <Faq items={homeFaq} />
      <FinalCta />
      <JsonLd data={[softwareApplicationSchema(), faqSchema(homeFaq)]} />
    </>
  );
}
