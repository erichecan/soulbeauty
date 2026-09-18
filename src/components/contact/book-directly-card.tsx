import { ArrowRight, CalendarDays } from "lucide-react";
import { LeafSprig } from "@/components/decor";
import { IconCircle } from "@/components/service-icon";
import { JANE_BOOKING_URL, janeLinkProps } from "@/lib/jane";

export function BookDirectlyCard() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-lavender-line bg-surface px-6 py-5">
      <div className="relative z-10 flex items-start gap-4">
        <IconCircle iconKey="calendar" className="h-[58px] w-[58px] [&>svg]:h-7 [&>svg]:w-7" />

        <div className="flex-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Prefer to Book Directly?
          </p>
          <h2 className="mt-1 font-display text-[28px] font-bold leading-[1.15] text-ink">
            Book an Appointment
          </h2>
          <p className="mt-1.5 max-w-[420px] text-[13.5px] leading-[1.5] text-ink-body">
            Fast, easy and secure online booking powered by Jane. Choose your
            service, preferred time and get ready to feel your best.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href={JANE_BOOKING_URL}
              {...janeLinkProps}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="hidden h-8 w-px bg-ink/15 sm:block" />
            <span className="flex items-center gap-2 text-[13px] text-ink-body">
              <CalendarDays className="h-[18px] w-[18px] text-brand" strokeWidth={1.5} />
              Powered by Jane
            </span>
          </div>
        </div>
      </div>

      <LeafSprig
        flip
        className="pointer-events-none absolute -right-2 -top-3 h-[110px] w-[95px] rotate-[18deg] opacity-80"
      />
    </section>
  );
}
