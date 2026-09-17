import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LeafSprig } from "@/components/decor";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PlaceholderPage({
  active,
  kicker,
  title,
  description,
}: {
  active: string;
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <SiteHeader active={active} />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-lavender">
          <div className="mx-auto flex min-h-[320px] max-w-[1400px] flex-col justify-center px-6 py-12 lg:pl-[84px] lg:pr-8">
            <p className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-ink-muted">
              {kicker}
            </p>
            <h1 className="mt-3 max-w-[620px] font-display text-[46px] font-bold leading-[1.08] text-ink">
              {title}
            </h1>
            <p className="mt-3 max-w-[460px] text-[15px] leading-[1.6] text-ink-body">
              {description}
            </p>
            <Link
              href="/booking"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <LeafSprig className="pointer-events-none absolute -left-6 top-6 hidden h-[250px] w-[140px] opacity-90 lg:block" />
          <LeafSprig
            flip
            className="pointer-events-none absolute -right-4 top-0 hidden h-[230px] w-[140px] opacity-75 lg:block"
          />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
