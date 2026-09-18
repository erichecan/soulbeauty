import Image from "next/image";
import { Heart } from "lucide-react";
import { LeafSprig, ScriptAccent, VerticalKicker } from "@/components/decor";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-lavender">
      <div className="relative mx-auto flex min-h-[300px] max-w-[1400px] flex-col lg:flex-row">
        <div className="relative z-20 flex w-full flex-col justify-center px-6 py-8 lg:w-[33%] lg:shrink-0 lg:py-4 lg:pl-[84px] lg:pr-4">
          <p className="flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.22em] text-ink-muted">
            Get in Touch
            <span className="h-px w-8 bg-ink-muted/40" />
          </p>

          <h1 className="mt-3 font-display text-[54px] font-bold leading-[1.04] text-ink">
            We&apos;re Here
            <br />
            for You.
          </h1>

          <p className="mt-3 max-w-[358px] text-[15px] leading-[1.55] text-ink-body">
            Have a question, want to learn more about our services, or ready to
            book your next visit? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="relative h-[240px] w-full lg:h-auto lg:w-[53.2%] lg:shrink-0">
          <Image
            src="/images/hero/contact.jpg"
            alt="Candles, towels and greenery at Soul Beauty Healing Center"
            fill
            priority
            sizes="53vw"
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
