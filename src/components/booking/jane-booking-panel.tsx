"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { janeCategoryUrl, janeLinkProps } from "@/lib/jane";

export type BookingCategory = {
  id: string;
  name: string;
  slug: string;
  services: {
    id: string;
    name: string;
    durationMin: number;
    priceCents: number;
    imageUrl: string | null;
  }[];
};

export function JaneBookingPanel({ categories }: { categories: BookingCategory[] }) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "");

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  if (!activeCategory) return null;

  const categoryUrl = janeCategoryUrl(activeCategory.slug);

  return (
    <section className="self-start rounded-2xl border border-lavender-line bg-surface px-6 py-5">
      <div>
        <h2 className="font-display text-[26px] font-bold text-ink">
          Book an Appointment
        </h2>
        <p className="mt-0.5 text-[13.5px] text-ink-body">
          Choose a service below to see live availability and book online.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 xl:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategoryId(category.id)}
            className={cn(
              "rounded-lg px-4 py-2.5 text-[13.5px] font-medium transition-colors",
              category.id === activeCategory.id
                ? "bg-brand text-white"
                : "bg-lavender-band text-ink hover:bg-lavender-soft",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <h3 className="font-display text-[17px] font-semibold text-ink">
          {activeCategory.name} Services
        </h3>

        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {activeCategory.services.length ? (
            activeCategory.services.map((service) => (
              <a
                key={service.id}
                href={categoryUrl}
                {...janeLinkProps}
                className="flex items-center gap-3 rounded-xl border border-lavender-line bg-white p-2 text-left transition-colors hover:border-brand/40"
              >
                <span className="relative h-[52px] w-[74px] shrink-0 overflow-hidden rounded-lg bg-lavender-soft">
                  {service.imageUrl && (
                    <Image
                      src={service.imageUrl}
                      alt={service.name}
                      fill
                      sizes="74px"
                      className="object-cover"
                    />
                  )}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-[15px] font-semibold leading-[1.25] text-ink">
                    {service.name}
                  </span>
                  <span className="mt-0.5 block text-[12.5px] text-ink-body">
                    {service.durationMin} min <span className="mx-1">•</span> $
                    {(service.priceCents / 100).toFixed(0)}
                  </span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/25 text-brand">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))
          ) : (
            <p className="rounded-xl border border-dashed border-lavender-line bg-white px-4 py-8 text-center text-[13.5px] text-ink-soft sm:col-span-2 lg:col-span-1 xl:col-span-2">
              All {activeCategory.name.toLowerCase()} options, durations and pricing
              are listed on our booking system — tap the button below to view them.
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 border-t border-lavender-line pt-4">
        <a
          href={categoryUrl}
          {...janeLinkProps}
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-5 py-3.5 text-center text-[15px] font-medium text-white transition-colors hover:bg-brand-hover"
        >
          View {activeCategory.name} Availability
          <ExternalLink className="h-4 w-4 shrink-0" />
        </a>

        <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[12.5px] text-ink-soft">
          <Lock className="h-3.5 w-3.5" strokeWidth={1.8} />
          Secure booking — opens in a new tab
        </p>
      </div>
    </section>
  );
}
