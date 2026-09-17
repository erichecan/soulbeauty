import { cn } from "@/lib/utils";

/** Hero 四角的橄榄绿叶子插画 */
export function LeafSprig({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 160 220"
      className={cn(className, flip && "-scale-x-100")}
      aria-hidden="true"
    >
      <g stroke="#9aa878" strokeWidth="1.6" fill="none" opacity="0.85">
        <path d="M18 8C34 54 52 104 78 148c14 24 30 44 52 62" />
        <path d="M44 52c-14-6-26-4-34 6 10 10 22 12 34-6z" fill="#b3bd93" />
        <path d="M56 78c16-4 28 0 34 12-12 8-24 6-34-12z" fill="#a6b087" />
        <path d="M70 108c-16-6-28-2-34 10 12 8 24 8 34-10z" fill="#b8c19c" />
        <path d="M86 138c16-6 30-2 36 10-14 8-26 6-36-10z" fill="#a6b087" />
        <path d="M104 168c-16-4-28 2-32 14 14 6 26 4 32-14z" fill="#b3bd93" />
      </g>
    </svg>
  );
}

/** 右上角手写体角标 */
export function ScriptAccent({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <div className={cn("font-script text-script leading-[1.15]", className)}>
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </div>
  );
}

/** CARE · RESTORE · BELONG 竖排小标 */
export function VerticalKicker({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 text-[11px] font-medium tracking-[0.3em] text-ink-muted",
        className,
      )}
    >
      {words.map((word) => (
        <span key={word}>{word}</span>
      ))}
    </div>
  );
}
