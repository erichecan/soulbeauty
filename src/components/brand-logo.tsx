import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#fdfbf7" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M32 44c-6.5 0-11.5-4.6-11.5-10.6 0-4.4 2.6-8.2 6.6-10.5 2-1.2 3.8-2.9 4.9-5.1 1.1 2.2 2.9 3.9 4.9 5.1 4 2.3 6.6 6.1 6.6 10.5C43.5 39.4 38.5 44 32 44z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M20.5 33.4c-3.4-.6-6-2.4-7.4-5.2 3.1-.9 6 -.5 8.4 1.1M43.5 33.4c3.4-.6 6-2.4 7.4-5.2-3.1-.9-6-.5-8.4 1.1"
        stroke="#9aa878"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandLogo({
  className,
  wordClassName,
}: {
  className?: string;
  wordClassName?: string;
}) {
  return (
    <Link href="/" className={cn("flex shrink-0 items-center gap-2 lg:gap-3", className)}>
      <BrandMark className="h-9 w-9 shrink-0 text-gold lg:h-12 lg:w-12" />
      <span className={cn("leading-none", wordClassName)}>
        <span className="block whitespace-nowrap font-display text-[17px] tracking-[0.12em] text-gold lg:text-[22px] lg:tracking-[0.16em]">
          SOUL BEAUTY
        </span>
        <span className="mt-1 block whitespace-nowrap font-body text-[9px] font-medium tracking-[0.24em] text-gold/85 lg:mt-1.5 lg:text-[11px] lg:tracking-[0.34em]">
          HEALING CENTER
        </span>
      </span>
    </Link>
  );
}
