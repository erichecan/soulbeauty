import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex shrink-0 items-start gap-2.5", className)}
      aria-label="Soul Beauty Healing Center"
    >
      <Image
        src="/logo-icon.png"
        alt=""
        width={478}
        height={548}
        className="h-11 w-auto lg:h-16"
      />
      <span className="flex h-[38px] flex-col justify-between whitespace-nowrap leading-none lg:h-[55px]">
        <span className="font-[family-name:var(--font-poppins)] text-[26px] font-extrabold uppercase tracking-tight text-[#cd9d50] lg:text-[37px]">
          Soul Beauty
        </span>
        <span className="font-[family-name:var(--font-poppins)] text-[12px] font-semibold uppercase tracking-[0.25em] text-[#cd9d50] lg:text-[18px]">
          Healing Center
        </span>
      </span>
    </Link>
  );
}
