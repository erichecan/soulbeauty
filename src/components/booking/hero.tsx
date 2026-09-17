import Image from "next/image";
import { LeafSprig } from "@/components/decor";

const steps = [
  "Choose Service",
  "Choose Practitioner",
  "Pick a Time",
  "Confirm",
];

export function BookingHero() {
  return (
    <section className="relative overflow-hidden bg-lavender">
      <div className="relative mx-auto flex min-h-[288px] max-w-[1400px] flex-col lg:h-[288px] lg:flex-row">
        <div className="relative z-20 flex w-full flex-col justify-center px-6 py-8 lg:w-[34.4%] lg:shrink-0 lg:pb-16 lg:pl-[84px] lg:pr-4 lg:pt-0">
          <p className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-ink-muted">
            Care <span className="mx-1">•</span> Restore <span className="mx-1">•</span>{" "}
            Belong
          </p>

          <h1 className="mt-3 font-display text-[46px] font-bold leading-[1.08] text-ink">
            Book your care,
            <br />
            your way.
          </h1>

          <p className="mt-2 text-[15px] text-ink-body">
            Simple. Secure. Powered by Jane.
          </p>
        </div>

        <div className="relative h-[200px] w-full lg:h-auto lg:flex-1">
          <Image
            src="/images/hero/booking.jpg"
            alt="Spa towels and self care note"
            fill
            priority
            sizes="66vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-lavender via-lavender/60 to-transparent" />
        </div>

      </div>

      <LeafSprig className="pointer-events-none absolute -left-6 top-2 z-10 hidden h-[220px] w-[130px] opacity-90 lg:block" />

      <div className="relative z-30 mx-auto max-w-[1400px] px-4 pt-4 lg:-mt-[62px] lg:px-14 lg:pt-0">
        <ol className="flex flex-wrap items-center gap-4 rounded-2xl border border-lavender-line bg-white/95 px-5 py-3 shadow-[0_2px_18px_rgba(51,9,92,0.06)] lg:flex-nowrap lg:px-8">
          {steps.map((step, index) => (
            <li key={step} className="flex flex-1 items-center gap-4">
              <span
                className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-[14px] font-semibold ${
                  index === 0
                    ? "bg-brand text-white"
                    : "bg-lavender-soft text-brand"
                }`}
              >
                {index + 1}
              </span>
              <span
                className={`text-[14px] ${
                  index === 0 ? "font-medium text-ink" : "text-ink-body"
                }`}
              >
                {step}
              </span>
              {index < steps.length - 1 && (
                <span className="h-px flex-1 bg-lavender-line" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
