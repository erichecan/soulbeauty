import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex shrink-0 items-center", className)}
      aria-label="Soul Beauty Healing Center"
    >
      <Image
        src="/logo.png"
        alt="Soul Beauty Healing Center"
        width={1983}
        height={793}
        className="h-11 w-auto lg:h-16"
      />
    </Link>
  );
}
