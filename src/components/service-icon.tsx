import { CalendarDays, Flower2, Heart, Leaf, ScanFace, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  lotus: Flower2,
  leaf: Leaf,
  face: ScanFace,
  calendar: CalendarDays,
  heart: Heart,
  tag: Tag,
} as const;

export type IconKey = keyof typeof icons;

export function ServiceIcon({
  iconKey,
  className,
}: {
  iconKey: string | null;
  className?: string;
}) {
  const Icon = icons[(iconKey ?? "lotus") as IconKey] ?? Flower2;
  return <Icon className={className} strokeWidth={1.5} />;
}

export function IconCircle({
  iconKey,
  className,
  size = "md",
}: {
  iconKey: string | null;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-lavender-soft text-brand",
        size === "md" ? "h-[50px] w-[50px]" : "h-[42px] w-[42px]",
        className,
      )}
    >
      <ServiceIcon
        iconKey={iconKey}
        className={size === "md" ? "h-6 w-6" : "h-[18px] w-[18px]"}
      />
    </span>
  );
}
