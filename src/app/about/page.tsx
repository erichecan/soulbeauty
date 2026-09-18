import { AboutHero } from "@/components/about/hero";
import { PractitionersCarousel } from "@/components/about/practitioners-carousel";
import { StoryCards } from "@/components/about/story-cards";
import { FeatureStrip, type Feature } from "@/components/home/feature-strip";
import { HomeServicesGrid } from "@/components/home/services-grid";
import { TestimonialBand } from "@/components/home/testimonial-band";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getPractitioners,
  getServiceOfferings,
  getTestimonial,
} from "@/lib/db/queries";

export const metadata = {
  title: "About · Soul Beauty Healing Center",
  description:
    "Compassionate care, natural healing and beauty — meet the team behind Soul Beauty Healing Center.",
};

export const dynamic = "force-dynamic";

const aboutFeatures: Feature[] = [
  { iconKey: "lotus", title: "Holistic Care", lines: ["Mind. Body. Beauty."] },
  {
    iconKey: "leaf",
    title: "Personalized Support",
    lines: ["Care that's uniquely you."],
  },
  {
    iconKey: "sparkles",
    title: "Natural Healing",
    lines: ["Feel better, inside and out."],
  },
  {
    iconKey: "users",
    title: "Experienced Practitioners",
    lines: ["A team you can trust."],
  },
];

export default async function AboutPage() {
  const [practitioners, offerings, testimonial] = await Promise.all([
    getPractitioners(),
    getServiceOfferings(),
    getTestimonial("about"),
  ]);

  return (
    <>
      <SiteHeader active="/about" />
      <main className="flex-1">
        <AboutHero />
        <FeatureStrip features={aboutFeatures} />
        <PractitionersCarousel practitioners={practitioners} />
        <StoryCards />
        <HomeServicesGrid offerings={offerings} compact />
        <TestimonialBand testimonial={testimonial} />
      </main>
      <SiteFooter />
    </>
  );
}
