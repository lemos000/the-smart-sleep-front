"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        `
        peer inline-flex h-[1.3rem] w-[2.5rem] items-center rounded-full
        transition-all duration-300 outline-none shadow-xs
        data-[state=checked]:bg-green-500
        data-[state=unchecked]:bg-gray-300
        focus-visible:ring-[3px] focus-visible:ring-green-500/40
        disabled:cursor-not-allowed disabled:opacity-50
        `,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          `
          block h-[1rem] w-[1rem] rounded-full bg-white shadow-sm
          transition-transform duration-300 ease-out
          data-[state=unchecked]:translate-x-[2px]
          data-[state=checked]:translate-x-[1.5rem]
          `
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
