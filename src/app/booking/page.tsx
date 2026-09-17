import { BookingWidget } from "@/components/booking/booking-widget";
import { ContactCard } from "@/components/booking/contact-card";
import { BookingHero } from "@/components/booking/hero";
import { PractitionersCard } from "@/components/booking/practitioners-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getBookingCategories,
  getPractitioners,
  getSiteSettings,
} from "@/lib/db/queries";

export const metadata = {
  title: "Booking · Soul Beauty Healing Center",
  description:
    "Book your massage therapy, acupuncture, day spa or medical aesthetics appointment online.",
};

// 内容由 Prisma Studio 维护,改完刷新即生效
export const dynamic = "force-dynamic";

export default async function BookingPage() {
  const [categories, practitioners, settings] = await Promise.all([
    getBookingCategories(),
    getPractitioners(),
    getSiteSettings(),
  ]);

  return (
    <>
      <SiteHeader active="/booking" />
      <main className="flex-1">
        <BookingHero />
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-8 pb-3 pt-2 xl:grid-cols-[0.92fr_1fr]">
          <div className="flex flex-col gap-4">
            <PractitionersCard practitioners={practitioners} />
            <ContactCard settings={settings} />
          </div>
          <BookingWidget categories={categories} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
