import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceOfferingModel } from "@/generated/prisma/models";

export function HomeServicesGrid({ offerings }: { offerings: ServiceOfferingModel[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 pb-2 pt-1">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-[32px] font-bold text-ink">
            Our Services
          </h2>
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink-muted">
            Holistic Care <span className="mx-2">•</span> Natural Healing{" "}
            <span className="mx-2">•</span> A More Radiant You
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-brand-accent"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering) => (
            <article
              key={offering.id}
              className="overflow-hidden rounded-2xl border border-lavender-line bg-surface"
            >
              <div className="relative h-[100px] w-full">
                {offering.imageUrl && (
                  <Image
                    src={offering.imageUrl}
                    alt={offering.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-3 px-5 py-2.5">
                <div>
                  <h3 className="font-display text-[17px] font-semibold leading-[1.25] text-ink">
                    {offering.name}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.45] text-ink-body">
                    {offering.summary}
                  </p>
                </div>
                <Link
                  href="/services"
                  aria-label={`Learn more about ${offering.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/25 text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
