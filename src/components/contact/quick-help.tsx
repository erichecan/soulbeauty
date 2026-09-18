import { IconCircle } from "@/components/service-icon";

const items = [
  {
    iconKey: "car",
    title: "Parking",
    text: "Free parking available on-site for your convenience.",
  },
  {
    iconKey: "shield",
    title: "Insurance",
    text: "Some services may be covered by extended health benefits. Please check with your provider.",
  },
  {
    iconKey: "message",
    title: "Booking Support",
    text: "Need help booking? Contact us by phone or email and we'll be happy to assist you.",
  },
];

export function QuickHelp() {
  return (
    <section className="rounded-2xl border border-lavender-line bg-surface px-6 py-5">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="font-display text-[28px] font-bold text-ink">Quick Help</h2>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
          Answers to Common Questions
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={index > 0 ? "sm:border-l sm:border-lavender-line sm:pl-4" : ""}
          >
            <IconCircle iconKey={item.iconKey} size="sm" />
            <h3 className="mt-2.5 whitespace-nowrap font-display text-[16.5px] font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-1 text-[13.5px] leading-[1.5] text-ink-body">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
