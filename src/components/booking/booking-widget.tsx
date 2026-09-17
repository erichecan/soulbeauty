"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export type BookingCategory = {
  id: string;
  name: string;
  services: {
    id: string;
    name: string;
    durationMin: number;
    priceCents: number;
    imageUrl: string | null;
  }[];
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "1:30 PM",
  "3:00 PM",
  "4:30 PM",
];

function buildMonthGrid(year: number, month: number) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const start = new Date(year, month, 1 - firstWeekday);
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + index);
    return { date, inMonth: date.getMonth() === month };
  });
}

export function BookingWidget({ categories }: { categories: BookingCategory[] }) {
  const today = useMemo(() => new Date(), []);
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? "");
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [viewMonth, setViewMonth] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ?? categories[0];

  const grid = useMemo(
    () => buildMonthGrid(viewMonth.year, viewMonth.month),
    [viewMonth],
  );

  const monthLabel = new Date(viewMonth.year, viewMonth.month, 1).toLocaleString(
    "en-US",
    { month: "long", year: "numeric" },
  );

  function shiftMonth(delta: number) {
    setViewMonth((current) => {
      const next = new Date(current.year, current.month + delta, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  }

  return (
    <section className="rounded-2xl border border-lavender-line bg-surface px-6 py-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-[26px] font-bold text-ink">
          Book an Appointment
        </h2>
        <span className="flex items-center gap-2 text-[14px] text-ink-body">
          <CalendarDays className="h-5 w-5 text-brand" strokeWidth={1.5} />
          Powered by <span className="font-display font-semibold text-ink">Jane</span>
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 xl:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => {
              setActiveCategoryId(category.id);
              setActiveServiceId(null);
            }}
            className={cn(
              "rounded-lg px-4 py-2.5 text-[13.5px] font-medium transition-colors",
              category.id === activeCategory?.id
                ? "bg-brand text-white"
                : "bg-lavender-band text-ink hover:bg-lavender-soft",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1fr] lg:grid-cols-1 xl:grid-cols-[1fr_1fr]">
        <div>
          <h3 className="font-display text-[17px] font-semibold text-ink">
            Select a Service
          </h3>

          <div className="mt-3 space-y-2.5">
            {activeCategory?.services.length ? (
              activeCategory.services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceId(service.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border bg-white p-2 text-left transition-colors",
                    service.id === activeServiceId
                      ? "border-brand/50 ring-1 ring-brand/20"
                      : "border-lavender-line hover:border-brand/30",
                  )}
                >
                  <span className="relative h-[52px] w-[74px] shrink-0 overflow-hidden rounded-lg bg-lavender-soft">
                    {service.imageUrl && (
                      <Image
                        src={service.imageUrl}
                        alt={service.name}
                        fill
                        sizes="74px"
                        className="object-cover"
                      />
                    )}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[15px] font-semibold leading-[1.25] text-ink">
                      {service.name}
                    </span>
                    <span className="mt-0.5 block text-[12.5px] text-ink-body">
                      {service.durationMin} min <span className="mx-1">•</span> $
                      {(service.priceCents / 100).toFixed(0)}
                    </span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/25 text-brand">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              ))
            ) : (
              <p className="rounded-xl border border-dashed border-lavender-line bg-white px-4 py-8 text-center text-[13.5px] text-ink-soft">
                Services for this category are coming soon.
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-display text-[17px] font-semibold text-ink">
            Select a Date
          </h3>

          <div className="mt-3">
            <div className="flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous month"
                onClick={() => shiftMonth(-1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink-body transition-colors hover:bg-lavender-soft"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <p className="font-display text-[15px] font-semibold text-brand">
                {monthLabel}
              </p>
              <button
                type="button"
                aria-label="Next month"
                onClick={() => shiftMonth(1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink-body transition-colors hover:bg-lavender-soft"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-y-1 text-center text-[12px] text-ink-soft">
              {weekdays.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="mt-1 grid grid-cols-7 gap-y-1 text-center text-[13px]">
              {grid.map(({ date, inMonth }) => {
                const isSelected =
                  date.toDateString() === selectedDate.toDateString();
                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={cn(
                      "mx-auto flex h-[26px] w-[26px] items-center justify-center rounded-full transition-colors",
                      !inMonth && "text-ink-soft/40",
                      inMonth && !isSelected && "text-ink hover:bg-lavender-soft",
                      isSelected && "bg-brand font-medium text-white",
                    )}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          <h3 className="mt-5 font-display text-[17px] font-semibold text-ink">
            Available Times
          </h3>

          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedTime(slot)}
                className={cn(
                  "rounded-lg border bg-white py-2.5 text-[13px] transition-colors",
                  slot === selectedTime
                    ? "border-brand bg-brand text-white"
                    : "border-lavender-line text-ink hover:border-brand/40",
                )}
              >
                {slot}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-full bg-brand py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-2 flex items-center justify-center gap-1.5 text-[12.5px] text-ink-soft">
            <Lock className="h-3.5 w-3.5" strokeWidth={1.8} />
            Secure booking powered by Jane
          </p>
        </div>
      </div>
    </section>
  );
}
