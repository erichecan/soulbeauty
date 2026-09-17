import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Heart, MapPin } from "lucide-react";
import { LeafSprig, ScriptAccent, VerticalKicker } from "@/components/decor";

export function HomeHero({ address }: { address: string }) {
  return (
    <section className="relative overflow-hidden bg-lavender">
      <div className="relative mx-auto flex min-h-[372px] max-w-[1400px] flex-col lg:flex-row">
        <div className="relative z-20 flex w-full flex-col justify-center px-6 py-8 lg:w-[34.4%] lg:shrink-0 lg:py-4 lg:pl-[84px] lg:pr-4">
          <p className="text-[11.5px] font-medium uppercase tracking-[0.2em] text-ink-muted">
            RMT <span className="mx-1">•</span> Acupuncture{" "}
            <span className="mx-1">•</span> Facial Wellness
          </p>

          <h1 className="mt-3 font-display text-[46px] font-bold leading-[1.08] text-ink">
            Feel Better.
            <br />
            Look Brighter.
            <br />
            Live in Balance.
          </h1>

          <p className="mt-3 max-w-[330px] text-[14px] leading-[1.55] text-ink-body">
            Personalized care that blends therapeutic treatment and beauty
            wellness — so you can feel your best, inside and out.
          </p>

          <div className="mt-4 flex items-center gap-5">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="h-8 w-px bg-ink/15" />
            <span className="flex items-center gap-2 text-[13px] text-ink-body">
              <CalendarDays className="h-[18px] w-[18px] text-brand" strokeWidth={1.5} />
              Easy online booking
            </span>
          </div>

          <p className="mt-4 flex items-center gap-1.5 text-[13px] text-ink-body">
            <MapPin className="h-4 w-4 text-brand" strokeWidth={1.8} />
            {address}
          </p>
        </div>

        <div className="relative h-[240px] w-full lg:h-auto lg:w-[51.8%] lg:shrink-0">
          <Image
            src="/images/hero/home.jpg"
            alt="Massage therapy session at Soul Beauty Healing Center"
            fill
            priority
            sizes="52vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-lavender via-lavender/60 to-transparent" />
        </div>

        <div className="relative z-10 hidden flex-1 flex-col justify-center gap-4 bg-white pl-5 pr-6 lg:flex">
          <div className="flex items-end gap-1.5">
            <ScriptAccent
              lines={["Healthy", "Happier", "More You"]}
              className="text-[25px]"
            />
            <Heart className="mb-1 h-4 w-4 text-script" strokeWidth={1.5} />
          </div>
          <span className="h-px w-9 bg-gold/45" />
          <VerticalKicker words={["CARE", "RESTORE", "BELONG"]} />
        </div>
      </div>

      <LeafSprig className="pointer-events-none absolute -left-6 top-4 z-10 hidden h-[250px] w-[140px] opacity-90 lg:block" />
      <LeafSprig
        flip
        className="pointer-events-none absolute right-[150px] -top-14 z-10 hidden h-[190px] w-[130px] opacity-75 lg:block"
      />
    </section>
  );
}
