"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "relative aspect-square size-5 shrink-0 rounded-full border border-zinc-300 dark:border-zinc-700",
        "bg-white dark:bg-zinc-900 shadow-sm transition-all duration-200 ease-in-out",
        "hover:scale-105 focus-visible:ring-4 focus-visible:ring-[var(--color-primary)]/30",
        "focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out",
          "opacity-0 data-[state=checked]:opacity-100" // aqui está o fade
        )}
      >
        <span
          className={cn(
            "block size-3 rounded-full bg-[var(--color-primary)]", // cor customizada da bolinha
            "shadow-[0_0_6px_var(--color-primary)]" // leve glow
          )}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
