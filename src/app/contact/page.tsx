import { BookDirectlyCard } from "@/components/contact/book-directly-card";
import { ContactHero } from "@/components/contact/hero";
import { MapCard } from "@/components/contact/map-card";
import { MessageForm } from "@/components/contact/message-form";
import { QuickHelp } from "@/components/contact/quick-help";
import { FeatureStrip, type Feature } from "@/components/home/feature-strip";
import { TestimonialBand } from "@/components/home/testimonial-band";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteSettings, getTestimonial } from "@/lib/db/queries";
import type { SiteSettingsModel } from "@/generated/prisma/models";

export const metadata = {
  title: "Contact · Soul Beauty Healing Center",
  description:
    "Visit Soul Beauty Healing Center in Thornhill, Ontario — address, hours, phone and online booking.",
};

export const dynamic = "force-dynamic";

function contactFeatures(settings: SiteSettingsModel): Feature[] {
  const [street, ...rest] = settings.address.split(", ");

  return [
    { iconKey: "mapPin", title: "Our Location", lines: [`${street},`, rest.join(", ")] },
    {
      iconKey: "phone",
      title: "Call Us",
      lines: [settings.phone1, settings.phone2].filter(Boolean) as string[],
    },
    { iconKey: "mail", title: "Email Us", lines: [settings.email] },
    {
      iconKey: "clock",
      title: "Hours",
      lines: [settings.hours, settings.hours2].filter(Boolean) as string[],
    },
  ];
}

export default async function ContactPage() {
  const [settings, testimonial] = await Promise.all([
    getSiteSettings(),
    getTestimonial("contact"),
  ]);

  return (
    <>
      <SiteHeader active="/contact" />
      <main className="flex-1">
        <ContactHero />
        {settings && <FeatureStrip features={contactFeatures(settings)} />}

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-4 pb-2 pt-3 lg:px-8 xl:grid-cols-[0.9fr_0.62fr_1fr]">
            <MessageForm email={settings?.email ?? ""} />
            <MapCard address={settings?.address ?? ""} />
            <div className="flex flex-col gap-4">
              <BookDirectlyCard />
              <QuickHelp />
            </div>
          </div>
        </section>

        <TestimonialBand testimonial={testimonial} />
      </main>
      <SiteFooter />
    </>
  );
}
