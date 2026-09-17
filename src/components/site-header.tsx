import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ScriptAccent } from "@/components/decor";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ active }: { active: string }) {
  return (
    <header className="relative z-20 overflow-x-clip bg-white">
      <div className="mx-auto flex h-[74px] max-w-[1400px] items-center justify-between gap-4 pl-5 pr-5 lg:gap-6 lg:pl-[71px] lg:pr-0">
        <BrandLogo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = item.href === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 text-[15px] transition-colors",
                  isActive
                    ? "font-semibold text-ink"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-ink" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/booking"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-brand-hover lg:gap-2.5 lg:px-7 lg:py-3.5 lg:text-[15px]"
        >
          <span className="lg:hidden">Book</span>
          <span className="hidden lg:inline">Book Appointment</span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        <ScriptAccent
          lines={["Wellness", "Beauty", "A Brighter You"]}
          className="hidden w-[160px] shrink-0 -rotate-[7deg] pr-4 text-right text-[17px] leading-[1.3] min-[1340px]:block"
        />
      </div>
    </header>
  );
}
