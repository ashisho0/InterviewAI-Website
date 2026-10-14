import { JsonLd } from "@/components/seo/json-ld";
import { LegalPage } from "@/components/ui/legal-page";
import { terms } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata("terms");

export default function TermsPage() {
  return (
    <>
      <LegalPage {...terms} path="/terms" />
      <JsonLd data={breadcrumbSchema([{ name: terms.title, path: "/terms" }])} />
    </>
  );
}
