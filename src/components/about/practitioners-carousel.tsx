"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LeafSprig } from "@/components/decor";
import type { PractitionerModel } from "@/generated/prisma/models";
import { janeLinkProps, janePractitionerUrl } from "@/lib/jane";

export function PractitionersCarousel({
  practitioners,
}: {
  practitioners: PractitionerModel[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCards(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-2 pt-3 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-[32px] font-bold text-ink">
            Meet Our Practitioners
          </h2>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-brand-accent"
          >
            View All Practitioners
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          ref={trackRef}
          className="mt-3 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {practitioners.map((practitioner) => (
            <a
              key={practitioner.id}
              href={janePractitionerUrl(practitioner.slug)}
              {...janeLinkProps}
              className="w-[150px] shrink-0 rounded-xl border border-lavender-line bg-surface px-2 pb-3 pt-4 text-center transition-colors hover:border-brand/40 lg:w-auto lg:min-w-0 lg:flex-1"
            >
              <span className="relative mx-auto flex h-[76px] w-full items-center justify-center">
                <LeafSprig className="pointer-events-none absolute left-0 top-4 h-[58px] w-[42px] -rotate-[28deg]" />
                <LeafSprig
                  flip
                  className="pointer-events-none absolute right-0 top-4 h-[58px] w-[42px] rotate-[28deg]"
                />
                <span className="relative h-[76px] w-[76px] overflow-hidden rounded-full bg-lavender-soft">
                  {practitioner.photoUrl && (
                    <Image
                      src={practitioner.photoUrl}
                      alt={practitioner.name}
                      fill
                      sizes="76px"
                      className="object-cover object-top"
                    />
                  )}
                </span>
              </span>

              <p className="mt-2.5 font-display text-[16px] font-semibold leading-[1.25] text-ink">
                {practitioner.name}
              </p>
              <p className="mt-0.5 text-[12px] leading-[1.35] text-ink-soft">
                {practitioner.title}
              </p>

              <p className="mt-2.5 rounded-lg bg-lavender-band px-2 py-1.5 text-[12px] text-ink-body">
                {practitioner.bio ? "View profile" : "Profile coming soon"}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label="Previous practitioners"
            onClick={() => scrollByCards(-1)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-brand transition-colors hover:bg-lavender-soft"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="h-1.5 flex-1 rounded-full bg-lavender-band">
            <span className="block h-full w-2/5 rounded-full bg-brand-accent" />
          </span>
          <button
            type="button"
            aria-label="Next practitioners"
            onClick={() => scrollByCards(1)}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-brand transition-colors hover:bg-lavender-soft"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
