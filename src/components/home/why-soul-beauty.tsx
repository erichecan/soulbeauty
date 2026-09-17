import { IconCircle } from "@/components/service-icon";

const reasons = [
  {
    iconKey: "heart",
    title: "Personalized Care",
    description: "Tailored treatments for your unique wellness goals.",
  },
  {
    iconKey: "leaf",
    title: "Holistic Healing",
    description: "A natural approach that nurtures both body and mind.",
  },
  {
    iconKey: "calendar",
    title: "Easy Online Booking",
    description: "Book anytime, anywhere with Jane.",
  },
];

export function WhySoulBeauty() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-4 px-8 py-2 lg:grid-cols-[220px_1fr]">
        <h2 className="font-display text-[31px] font-bold leading-[1.15] text-ink">
          Why Soul Beauty
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-center gap-4 rounded-2xl border border-lavender-line bg-surface px-6 py-3"
            >
              <IconCircle iconKey={reason.iconKey} />
              <div>
                <h3 className="font-display text-[17px] font-semibold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.45] text-ink-body">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
