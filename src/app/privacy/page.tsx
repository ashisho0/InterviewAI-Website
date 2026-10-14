import { JsonLd } from "@/components/seo/json-ld";
import { LegalPage } from "@/components/ui/legal-page";
import { privacy } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata("privacy");

export default function PrivacyPage() {
  return (
    <>
      <LegalPage {...privacy} path="/privacy" />
      <JsonLd data={breadcrumbSchema([{ name: privacy.title, path: "/privacy" }])} />
    </>
  );
}
