import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LeafSprig, ScriptAccent } from "@/components/decor";
import { IconCircle } from "@/components/service-icon";

export function ServicesInfoStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 pb-3 pt-1">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_1.4fr]">
          <div className="flex items-start gap-4 rounded-2xl border border-lavender-line bg-surface px-6 py-4">
            <IconCircle iconKey="tag" />
            <div>
              <h3 className="font-display text-[18px] font-semibold text-ink">
                Our Pricing
              </h3>
              <p className="mt-1 text-[13.5px] leading-[1.45] text-ink-body">
                Transparent pricing for all services.
                <br />
                Invest in your wellness.
              </p>
              <Link
                href="/booking"
                className="mt-2 inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink underline underline-offset-4 transition-colors hover:text-brand-accent"
              >
                View Pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-lavender-line bg-surface px-6 py-4">
            <IconCircle iconKey="calendar" />
            <div>
              <h3 className="font-display text-[18px] font-semibold text-ink">
                Online Booking
              </h3>
              <p className="mt-1 text-[13.5px] leading-[1.45] text-ink-body">
                Fast, easy and secure booking
                <br />
                anytime, anywhere.
              </p>
              <p className="mt-0.5 text-[12px] text-ink-soft">Powered by Jane</p>
              <Link
                href="/booking"
                className="mt-1 inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink underline underline-offset-4 transition-colors hover:text-brand-accent"
              >
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative flex items-start gap-4 overflow-hidden rounded-2xl border border-lavender-line bg-surface px-6 py-4">
            <IconCircle iconKey="heart" />
            <div className="max-w-[340px]">
              <h3 className="font-display text-[18px] font-semibold text-ink">
                More Than a Treatment
              </h3>
              <p className="mt-1 text-[13.5px] leading-[1.45] text-ink-body">
                At Soul Beauty, we believe true wellness comes from feeling cared
                for — body, mind and skin. You belong here.
              </p>
            </div>

            <div className="pointer-events-none ml-auto flex items-center gap-2 self-center">
              <LeafSprig className="h-[64px] w-[80px] rotate-[-18deg] opacity-80" />
              <ScriptAccent
                lines={["Care", "Restore", "Belong"]}
                className="text-[18px] leading-[1.2]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
