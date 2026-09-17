import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PractitionerModel } from "@/generated/prisma/models";

export function PractitionersCard({
  practitioners,
}: {
  practitioners: PractitionerModel[];
}) {
  return (
    <section className="rounded-2xl border border-lavender-line bg-surface px-6 py-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-[26px] font-bold text-ink">
            Our Practitioners
          </h2>
          <p className="mt-0.5 text-[13.5px] text-ink-body">
            Compassionate. Experienced. Here for You.
          </p>
        </div>
        <Link
          href="/about"
          className="mt-1 inline-flex shrink-0 items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-brand-accent"
        >
          Meet Our Team
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {practitioners.map((practitioner) => (
          <article
            key={practitioner.id}
            className="overflow-hidden rounded-xl border border-lavender-line bg-white pb-3 text-center"
          >
            <div className="relative mx-auto mt-3 h-[72px] w-[72px] overflow-hidden rounded-full bg-lavender-soft">
              {practitioner.photoUrl && (
                <Image
                  src={practitioner.photoUrl}
                  alt={practitioner.name}
                  fill
                  sizes="72px"
                  className="object-cover object-top"
                />
              )}
            </div>
            <p className="mt-2.5 px-2 text-[13.5px] font-medium leading-[1.3] text-ink">
              {practitioner.name}
            </p>
            <p className="mt-0.5 px-2 text-[12px] text-ink-soft">
              {practitioner.title ?? "Profile coming soon"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
