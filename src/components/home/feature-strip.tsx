import { IconCircle } from "@/components/service-icon";

const features = [
  { iconKey: "lotus", title: "RMT", lines: ["Relieve pain", "Improve mobility"] },
  {
    iconKey: "leaf",
    title: "Acupuncture",
    lines: ["Restore balance", "Support natural healing"],
  },
  {
    iconKey: "face",
    title: "Facial Care",
    lines: ["Refresh your skin", "Enhance your glow"],
  },
  {
    iconKey: "calendar",
    title: "Online Booking",
    lines: ["Fast, easy and secure", "Powered by Jane"],
  },
];

export function FeatureStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 py-1.5">
        <div className="grid grid-cols-1 rounded-2xl border border-lavender-line bg-surface sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-center gap-3.5 px-7 py-3.5 ${
                index > 0 ? "lg:border-l lg:border-lavender-line" : ""
              }`}
            >
              <IconCircle iconKey={feature.iconKey} />
              <div>
                <p className="font-display text-[17px] font-semibold text-ink">
                  {feature.title}
                </p>
                {feature.lines.map((line) => (
                  <p key={line} className="text-[13px] leading-[1.45] text-ink-body">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
