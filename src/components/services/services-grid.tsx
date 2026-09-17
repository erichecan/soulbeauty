import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconCircle } from "@/components/service-icon";
import type { ServiceOfferingModel } from "@/generated/prisma/models";

export function ServicesGrid({ offerings }: { offerings: ServiceOfferingModel[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 pb-2 pt-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-[32px] font-bold text-ink">Our Services</h2>
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-ink-muted">
            Holistic Care <span className="mx-2">•</span> Natural Healing{" "}
            <span className="mx-2">•</span> A More Radiant You
          </p>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering) => (
            <article
              key={offering.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-lavender-line bg-surface"
            >
              <div className="relative h-[130px] w-full">
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

              <div className="flex flex-1 flex-col px-5 py-4">
                <div className="flex items-center gap-3">
                  <IconCircle iconKey={offering.iconKey} />
                  <h3 className="font-display text-[19px] font-semibold leading-[1.2] text-ink">
                    {offering.name}
                  </h3>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {offering.bullets.map((bullet: string) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-[13.5px] leading-[1.45] text-ink-body"
                    >
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-ink-body" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className="mt-4 inline-flex items-center justify-center gap-2 self-center rounded-full bg-brand px-6 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-brand-hover"
                >
                  Learn More
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
