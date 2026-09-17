import { FeatureStrip } from "@/components/home/feature-strip";
import { HomeHero } from "@/components/home/hero";
import { HomeServicesGrid } from "@/components/home/services-grid";
import { TestimonialBand } from "@/components/home/testimonial-band";
import { WhySoulBeauty } from "@/components/home/why-soul-beauty";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getFeaturedTestimonial,
  getServiceOfferings,
  getSiteSettings,
} from "@/lib/db/queries";

// 内容由 Prisma Studio 维护,改完刷新即生效
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [offerings, testimonial, settings] = await Promise.all([
    getServiceOfferings(),
    getFeaturedTestimonial(),
    getSiteSettings(),
  ]);

  return (
    <>
      <SiteHeader active="/" />
      <main className="flex-1">
        <HomeHero address={settings?.address ?? ""} />
        <FeatureStrip />
        <HomeServicesGrid offerings={offerings} />
        <WhySoulBeauty />
        <TestimonialBand testimonial={testimonial} />
      </main>
      <SiteFooter />
    </>
  );
}
