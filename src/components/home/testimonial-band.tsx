import { Quote, Star } from "lucide-react";
import { LeafSprig, ScriptAccent } from "@/components/decor";
import type { TestimonialModel } from "@/generated/prisma/models";

export function TestimonialBand({ testimonial }: { testimonial: TestimonialModel | null }) {
  if (!testimonial) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 pb-3 pt-0">
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-lavender-band px-8 py-3.5 lg:flex-row">
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white/70 text-brand-accent">
            <Quote className="h-6 w-6 fill-current" />
          </span>

          <p className="max-w-[420px] font-display text-[19px] italic leading-[1.45] text-ink">
            “{testimonial.quote}”
          </p>

          <span className="hidden h-14 w-px bg-brand/15 lg:block" />

          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-5 sm:text-left">
            <div className="flex gap-1 text-brand-accent">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" strokeWidth={0} />
              ))}
            </div>
            <div>
              <p className="font-display text-[19px] font-semibold text-ink">
                {testimonial.headline}
              </p>
              <p className="mt-0.5 text-[14px] text-ink-body">{testimonial.subline}</p>
            </div>
          </div>

          <div className="pointer-events-none ml-auto hidden items-center gap-3 lg:flex">
            <LeafSprig className="h-[70px] w-[90px] rotate-[-20deg] opacity-80" />
            <ScriptAccent
              lines={["Care", "Restore", "Belong"]}
              className="text-[19px] leading-[1.2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
