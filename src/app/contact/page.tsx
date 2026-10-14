import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { TryNowButton } from "@/components/ui/try-now-button";
import { contactPage as c } from "@/content/pages";
import { CONTACT_EMAIL } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata("contact");

const trail = [{ name: "Contact", path: "/contact" }];

export default function ContactPage() {
  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumbs trail={trail} />
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-[1.1] text-fg md:text-5xl">{c.title}</h1>
          <p className="mt-5 text-lg text-muted-fg md:text-xl">{c.lead}</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Card>
            <ContactForm />
          </Card>
          <div className="space-y-6">
            <Card>
              <Mail aria-hidden="true" className="size-6 text-primary" />
              <h2 className="mt-3 text-lg font-bold text-fg">{c.emailLabel}</h2>
              <p className="mt-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-all font-semibold text-link underline underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Card>
            <Card>
              <h2 className="text-lg font-bold text-fg">Ready to prepare?</h2>
              <p className="mt-2 text-muted-fg">Generate your interview prep now. It&rsquo;s free and needs no account.</p>
              <TryNowButton placement="page-hero" className="mt-4" />
            </Card>
          </div>
        </div>
      </Container>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
