import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { LeafSprig } from "@/components/decor";
import type { SiteSettingsModel } from "@/generated/prisma/models";

export function ContactCard({ settings }: { settings: SiteSettingsModel | null }) {
  if (!settings) return null;

  const [street, ...rest] = settings.address.split(", ");

  const rows = [
    { icon: MapPin, lines: [`${street},`, rest.join(", ")] },
    {
      icon: Phone,
      lines: [
        [settings.phone1, settings.phone2].filter(Boolean).join("  |  "),
      ],
    },
    { icon: Mail, lines: [settings.email] },
    { icon: Clock, lines: [settings.hours, settings.hours2 ?? ""].filter(Boolean) },
  ];

  return (
    <section className="rounded-2xl border border-lavender-line bg-surface px-6 py-5">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_290px]">
        <div>
          <h2 className="font-display text-[26px] font-bold text-ink">
            Contact &amp; Location
          </h2>
          <p className="mt-0.5 text-[13.5px] text-ink-body">
            We&apos;d love to hear from you.
          </p>

          <ul className="mt-4 space-y-3">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.lines.join()} className="flex items-center gap-3.5">
                  <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-lavender-soft text-brand">
                    <Icon className="h-[17px] w-[17px]" strokeWidth={1.6} />
                  </span>
                  <div className="text-[13.5px] leading-[1.45] text-ink-body">
                    {row.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-xl bg-lavender-soft/70">
          <div className="flex flex-col items-center gap-2 text-ink-soft">
            <MapPin className="h-8 w-8" strokeWidth={1.4} />
            <p className="text-[13.5px]">Map coming soon</p>
          </div>
          <LeafSprig className="pointer-events-none absolute -bottom-4 right-2 h-[90px] w-[70px] rotate-[18deg] opacity-40" />
        </div>
      </div>
    </section>
  );
}
