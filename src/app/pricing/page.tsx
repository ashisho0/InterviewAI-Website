import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { PricingCard } from "@/components/sections/pricing-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { pricingFaq } from "@/content/faq";
import { pricingPage as c } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata = buildMetadata("pricing");

const trail = [{ name: "Pricing", path: "/pricing" }];

export default function PricingPage() {
  return (
    <>
      <div className="bg-sand pb-16 pt-10 md:pb-24 md:pt-14">
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold leading-[1.1] text-fg md:text-5xl">{c.title}</h1>
            <p className="mt-5 text-lg text-muted-fg md:text-xl">{c.lead}</p>
          </div>
          <div className="mt-12">
            <PricingCard headingLevel="h2" />
          </div>
          <p className="mt-8 text-center text-sm text-muted-fg">
            Want to know exactly what&rsquo;s in the report?{" "}
            <Link href="/features" className="font-semibold text-link underline underline-offset-4">
              See all features
            </Link>
            . Running a consultancy?{" "}
            <Link href="/contact" className="font-semibold text-link underline underline-offset-4">
              Get in touch
            </Link>
            .
          </p>
        </Container>
      </div>
      <Faq items={pricingFaq} title={c.faqTitle} />
      <FinalCta />
      <JsonLd data={[softwareApplicationSchema(), faqSchema(pricingFaq), breadcrumbSchema(trail)]} />
    </>
  );
}
