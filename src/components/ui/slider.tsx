"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-auto",
        className
      )}
      {...props}
    >
      {/* TRILHA DO SLIDER */}
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "relative grow overflow-hidden rounded-full bg-zinc-200/60 dark:bg-zinc-800/70",
          "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
          "data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "absolute rounded-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
            "bg-[var(--color-primary)] dark:bg-[var(--color-secondary)]"
          )}
        />
      </SliderPrimitive.Track>

      {/* PONTEIRO (THUMB) */}
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot="slider-thumb"
          className={cn(
            "block size-5 shrink-0 rounded-full border-[3px] border-white shadow-md",
            "bg-[var(--color-primary)] transition-transform duration-200 ease-out",
            "hover:scale-110 focus-visible:scale-110",
            "focus-visible:ring-4 ring-[var(--color-primary)]/30 ring-offset-2 ring-offset-[var(--color-bg)]",
            "disabled:pointer-events-none disabled:opacity-50"
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
