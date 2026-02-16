"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Render a styled label element that forwards props to Radix's Label primitive.
 *
 * The component applies a default set of utility classes for layout, spacing, typography,
 * selection behavior, and disabled/peer state styling, and merges any provided `className`.
 *
 * @param className - Additional class names to merge with the component's default classes
 * @returns The rendered label element with merged props and classes
 */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }