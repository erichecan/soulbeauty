import { ServicesHero } from "@/components/services/hero";
import { ServicesInfoStrip } from "@/components/services/info-strip";
import { ServicesGrid } from "@/components/services/services-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getServiceOfferings } from "@/lib/db/queries";

export const metadata = {
  title: "Services · Soul Beauty Healing Center",
  description:
    "Therapeutic and beauty wellness services — registered massage therapy, spa massage, certified acupuncture and facial treatments.",
};

// 内容由 Prisma Studio 维护,改完刷新即生效
export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const offerings = await getServiceOfferings();

  return (
    <>
      <SiteHeader active="/services" />
      <main className="flex-1">
        <ServicesHero />
        <ServicesGrid offerings={offerings} />
        <ServicesInfoStrip />
      </main>
      <SiteFooter />
    </>
  );
}
