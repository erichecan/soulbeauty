import { LeafSprig } from "@/components/decor";
import { IconCircle } from "@/components/service-icon";

const cards = [
  {
    iconKey: "heart",
    title: "Our Story",
    lines: ["A welcoming space for healing,", "beauty and balance."],
  },
  {
    iconKey: "leaf",
    title: "Our Philosophy",
    lines: ["Treat the whole person —", "naturally and compassionately."],
  },
  {
    iconKey: "target",
    title: "Our Mission",
    lines: [
      "Empowering you to look brighter,",
      "feel healthier and live in greater balance.",
    ],
  },
];

export function StoryCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-2 pt-3 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-lavender-line bg-surface px-6 py-4"
            >
              <IconCircle iconKey={card.iconKey} />
              <div className="relative z-10">
                <h3 className="font-display text-[22px] font-bold leading-[1.2] text-ink">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-[13.5px] leading-[1.5] text-ink-body">
                    {line}
                  </p>
                ))}
              </div>
              <LeafSprig
                flip
                className="pointer-events-none absolute -bottom-3 right-2 h-[88px] w-[76px] rotate-[14deg] opacity-80"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
